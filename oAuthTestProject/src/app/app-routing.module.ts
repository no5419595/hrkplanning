import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { PublicPageComponent }      from './public-page/public-page.component';
import { AuthorizedPageComponent }      from './authorized-page/authorized-page.component';
import { LoginGuard }      from './login.guard';

import { Constants} from './Constants';


const routes: Routes = [
  { path: Constants.pages['LOGIN'], component: LoginComponent },
  { path: Constants.pages['PUBLIC'], component: PublicPageComponent },
  { path: Constants.pages['AUTHORIZED'], component: AuthorizedPageComponent, canActivate: [LoginGuard]},
  { path: '', redirectTo: Constants.pages['PUBLIC'], pathMatch: 'full' }

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

