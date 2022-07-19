import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCreateComponent } from './component/user-create/user-create.component'; 
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserUpdateComponent } from './component/user-update/user-update.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {path: '', redirectTo:'users', pathMatch:'full'},
  {path: 'users', component: UserListComponent},
  {path: 'users/:uname', component: UserDetailsComponent},
  {path: 'create', component: UserCreateComponent},
  {path:'update', component:UserUpdateComponent},
  {path: 'login', component: UserLoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
