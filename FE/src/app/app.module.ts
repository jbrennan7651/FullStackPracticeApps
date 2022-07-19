import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './component/user-create/user-create.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserLoginComponent } from './component/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    UserListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
