import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {MainmenuComponent} from "./main-menu/mainmenu.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CategoryComponent} from "./category/category.component";
import {HompageComponent} from "./hompage/hompage.component";
import {FormboxComponent} from "./formbox/formbox.component";

const appRoutes: Routes=[
  {path:"",component:HomeComponent},
  {path:"category",component:CategoryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,SidebarComponent,HomeComponent,CategoryComponent,HompageComponent,FormboxComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
