import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetallePartituraComponent } from './pages/detalle-partitura/detalle-partitura.component';
import { PartiturasPageComponent } from './pages/partituras-page/partituras-page.component';
import { ContactamePageComponent } from './pages/contactame-page/contactame-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'partituras',
        component: PartiturasPageComponent
    },
    {
        path: 'contacto',
        component: ContactamePageComponent
    },
    {
        path: 'partitura/:slug',
        component: DetallePartituraComponent    
    }
];
