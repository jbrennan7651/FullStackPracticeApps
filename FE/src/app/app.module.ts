import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MainGuiComponent } from './components/main-gui/main-gui.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/home/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    MainGuiComponent,
    NavbarComponent,
    UsersListComponent,
    AdminCreateComponent,
    UserInfoListComponent,
    HomeComponent,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
