import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TaskHomeComponent } from './components/task-home/task-home.component';
import { TaskAddFormComponent } from './components/task-add-form/task-add-form.component';
import { TaskListsComponent } from './components/task-lists/task-lists.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
//import { TaskAlertMessageComponent } from './components/task-alert-message/task-alert-message.component';
import { TaskEditFormComponent } from './components/task-edit-form/task-edit-form.component';
import { TaskSoftDeleteComponent } from './components/task-soft-delete/task-soft-delete.component';
import { TaskPermDeleteComponent } from './components/task-perm-delete/task-perm-delete.component';
import { TaskPermDeleteConfirmComponent } from './components/task-perm-delete-confirm/task-perm-delete-confirm.component';
import { TaskSoftDeleteRestoreComponent } from './components/task-soft-delete-restore/task-soft-delete-restore.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import { AuthInterceptor } from './shared/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TaskHomeComponent,
    TaskAddFormComponent,
    TaskListsComponent,
    TaskDetailsComponent,
    //TaskAlertMessageComponent,
    TaskEditFormComponent,
    TaskSoftDeleteComponent,
    TaskPermDeleteComponent,
    TaskPermDeleteConfirmComponent,
    TaskSoftDeleteRestoreComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    RouterModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
