import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { SesionComponent } from './componentes/sesion/sesion.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { ReportComponent } from './componentes/report/report.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'sesion',component:SesionComponent},
    {path:'register',component:RegisterComponent},
    {path:'actividades',component:ActividadesComponent},
    {path:'report',component:ReportComponent}
];
