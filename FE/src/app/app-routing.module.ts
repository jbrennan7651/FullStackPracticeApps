import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MainGuiComponent } from './components/main-gui/main-gui.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full' },
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'main/:uname', component: MainGuiComponent},
  {path: 'usersList', redirectTo: 'usersList'},
  {path: 'usersList', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
