import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { PublicPageComponent }      from './public-page/public-page.component';
import { AuthorizedPageComponent }      from './authorized-page/authorized-page.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'public-page', component: PublicPageComponent },
  { path: 'authorized-page', component: AuthorizedPageComponent},
  { path: '', redirectTo: '/public-page', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

