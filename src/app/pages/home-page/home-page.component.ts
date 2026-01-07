import { Component, OnInit } from '@angular/core';
import { PartituraService } from '../../services/partitura.service';
import { Partitura } from '../../interfaces/Partitura';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavComponent } from "../../components/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink, NavComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent implements OnInit {
  partituras: Partitura[] = [];

  constructor(private partituraService: PartituraService) {}

  ngOnInit(): void {
    this.partituraService.listPartiturasDestacados().subscribe({
      next: (res) => {

        this.partituras = res.results;
      },
    });
  }
}
