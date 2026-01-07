import { Component, OnInit } from '@angular/core';
import { PartituraService } from '../../services/partitura.service';
import { Categoria, Partitura } from '../../interfaces/Partitura';
import { ActivatedRoute } from '@angular/router';
import { FormYapeComponent } from "../../components/form-yape/form-yape.component";
import { CommonModule } from '@angular/common';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-detalle-partitura',
  imports: [FormYapeComponent, CommonModule, NavComponent, FooterComponent],
  templateUrl: './detalle-partitura.component.html',
  styles: ``
})
export class DetallePartituraComponent implements OnInit {

  partitura: Partitura = <Partitura>{} 
  showModalYape = false
  env = environment


  constructor(private partituraService: PartituraService, private router: ActivatedRoute){
    
  }

  ngOnInit(): void {


    this.router.params.subscribe({
      next: res => {
        this.partituraService.detailPartitura(res['slug']).subscribe({
          next: par => {
            this.partitura = par
          }
        })
      }
    })

  }

  openModalYape(){
    this.showModalYape = true
  }

  closeModalYape(){
    this.showModalYape = false
  }


}
