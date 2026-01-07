import { Component } from '@angular/core';
import { Partitura } from '../../interfaces/Partitura';
import { PartituraService } from '../../services/partitura.service';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-partituras-page',
  imports: [NavComponent, FooterComponent, CommonModule, RouterLink],
  templateUrl: './partituras-page.component.html',
  styles: ``
})
export class PartiturasPageComponent {
  partituras: Partitura[] = [];

  constructor(private partituraService: PartituraService) {}

  ngOnInit(): void {
    this.partituraService.listPartituras().subscribe({
      next: (res) => {

        this.partituras = res.results;
      },
    });
  }
}
