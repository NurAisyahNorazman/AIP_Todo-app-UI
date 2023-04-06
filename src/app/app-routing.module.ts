import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHomeComponent } from './components/task-home/task-home.component';
import { TaskPermDeleteComponent } from './components/task-perm-delete/task-perm-delete.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  { path: 'todos/deleted/:id', component: TaskPermDeleteComponent,canActivate:[AuthGuard] },
  { path: 'todos/deleted', component: TaskPermDeleteComponent,canActivate:[AuthGuard] },
  { path: 'todos/:id', component: TaskHomeComponent,canActivate:[AuthGuard] },
  { path: 'todos', component: TaskHomeComponent,canActivate:[AuthGuard]},
  { path: 'todos', component: TaskHomeComponent,canActivate:[AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
