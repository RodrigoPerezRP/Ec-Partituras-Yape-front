import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Partitura } from '../../interfaces/Partitura';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PartituraService } from '../../services/partitura.service';
import { SuccessModalComponent } from "../success-modal/success-modal.component";
import { FailedModalComponent } from "../failed-modal/failed-modal.component";
import { environment } from '../../../environments/environment';
import { LoaderPayComponent } from "../loader-pay/loader-pay.component";

@Component({
  selector: 'app-form-yape',
  imports: [ReactiveFormsModule, CommonModule, SuccessModalComponent, FailedModalComponent, LoaderPayComponent],
  templateUrl: './form-yape.component.html',
  styles: ``,
})
export class FormYapeComponent {
  
  constructor (private partituraService: PartituraService) {}
  isSubmitting = false;


  showModalSuccess = signal<boolean>(false) 
  showModalFailed = signal<boolean>(false)
  env = environment

  @Input() partitura: Partitura = <Partitura>{};
  @Output() close = new EventEmitter();

  formYape = new FormGroup({
    otp: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{6}$/),
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^9\d{8}$/),
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    whatsappNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^9\d{8}$/),
      Validators.minLength(9),
      Validators.maxLength(9),
    ]),
  });

  closeModalYape() {
    this.close.emit();
  }

  handleSubmit() {
    
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    const { otp, phoneNumber, email, whatsappNumber } = this.formYape.value

    const body = {
      'phoneNumber': phoneNumber,
      'otp': otp,
      'email': email,
      'whatsappNumber': whatsappNumber,
      'partituraId': this.partitura.id
    }

    this.partituraService.createPayment(body).subscribe({
      next: res => {
        if(res){
          this.isSubmitting = false;
          this.showModalSuccess.set(true)
          setTimeout(() => {
            window.location.href = '/'
          }, 5000);

        }

      },
      error: err => {
        this.isSubmitting = false;
        this.showModalFailed.set(true)
        setTimeout(() => {
          window.location.reload()
        }, 5000);
      }
    })

  }
}
