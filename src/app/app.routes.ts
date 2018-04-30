import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistesComponent } from './login/registes.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const AppRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: 'dashborad', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: Graficas1Component },
        { path: '', redirectTo: '/dashborad', pathMatch: 'full' }
      ]
     },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistesComponent },
    { path: '**', component: NopagefoundComponent }
  ];


  export const APP_ROUTES = RouterModule.forRoot( AppRoutes, {useHash: true});

