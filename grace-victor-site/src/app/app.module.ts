import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthorizedPageComponent } from './authorized-page/authorized-page.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular5-social-login";
import { getAuthServiceConfigs } from "./socialloginConfig";
import { LoginService } from './login.service';
import { Constants } from './Constants';
import { ContentComponent } from './content/content.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PublicPageComponent,
    AuthorizedPageComponent,
    ContentComponent,
    NavComponent
  ],
  exports:[RouterModule],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  } ,
  LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
