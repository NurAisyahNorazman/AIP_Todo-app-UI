import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskAddFormComponent } from '../task-add-form/task-add-form.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog, 
    private router: Router, 
    private location: Location) {}

  openTaskFormDialog(): void {
  const dialogRef = this.dialog.open(TaskAddFormComponent, {
    width: '500px',
    data: {originalUrl: '/todos'}
  });

  dialogRef.afterClosed().subscribe(result => {
    this.location.replaceState('/todos');
    location.reload();
    console.log('The dialog was closed');
  });

}

onLogout() {
  sessionStorage.clear();
  this.router.navigateByUrl("login")
}

}
