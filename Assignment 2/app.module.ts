import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WarpComponent } from './warp/warp.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisSuccessComponent } from './regis-success/regis-success.component';
import { LoginSuccessComponent } from './login-success/login-success.component';

const appRoutes: Routes = [
  {path:"Home", component: HomeRegisterComponent},
  {path:"Register", component: RegisterComponent},
  {path:"Login", component: LoginComponent},
  {path:"Login-Success", component: LoginSuccessComponent},
  {path:"Regis-Success", component: RegisSuccessComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarpComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    HomeRegisterComponent,
    RegisterComponent,
    LoginComponent,
    RegisSuccessComponent,
    LoginSuccessComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
