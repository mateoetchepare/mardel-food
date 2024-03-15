import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 // { path: 'home', component: }
  
  // { path: 'about-us', loadChildren: () => import(./...).then(m => m.AboutUsCumponent)}
  // { path: 'log-in', loadChildren: () => import(./...).then(m => m.LogInComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
