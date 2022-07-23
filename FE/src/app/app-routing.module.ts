import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CartComponent } from './components/home/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { MainGuiComponent } from './components/main-gui/main-gui.component';
import { UserInfoListComponent } from './components/user-info-list/user-info-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path: 'home/login', redirectTo: 'login', pathMatch:'full' },
  {path: 'home/:uname/main', redirectTo: 'main/:uname', pathMatch:'full' },
  {path: 'cart', component: CartComponent},
  {path: 'home/:uname/cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'main/:uname', component: MainGuiComponent},
  {path: 'usersList', redirectTo: 'usersList'},
  {path: 'usersList', component: UsersListComponent},
  {path: 'usersInfoList', component: UserInfoListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'home/:uname', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
