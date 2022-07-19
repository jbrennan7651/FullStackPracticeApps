import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MainGuiComponent } from './components/main-gui/main-gui.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full' },
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreateUserComponent},
  {path: 'main/:uname', component: MainGuiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
