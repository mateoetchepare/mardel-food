import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule) },
  { path: 'log%20in', loadChildren: () => import('./log-in/log-in.module').then((m) => m.LogInModule)}
  
  // { path: 'log-in', loadChildren: () => import(./...).then(m => m.LogInComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
