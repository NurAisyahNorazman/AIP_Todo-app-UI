import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { TaskPermDeleteConfirmComponent } from '../task-perm-delete-confirm/task-perm-delete-confirm.component'; 
import { TaskSoftDeleteRestoreComponent } from '../task-soft-delete-restore/task-soft-delete-restore.component'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-perm-delete',
  templateUrl: './task-perm-delete.component.html',
  styleUrls: ['./task-perm-delete.component.css']
})
export class TaskPermDeleteComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.readTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data.filter(task => task.isDeleted === true);
    });
  }

  openCompleteDeleteDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskPermDeleteConfirmComponent, {
      width: '500px',
      data: { task: task, originalUrl: '/todos/deleted' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/todos/deleted');
      location.reload();
      console.log('The dialog was closed');
    });
  }

  openTaskRestoreDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskSoftDeleteRestoreComponent, {
      width: '500px',
      data: { task: task, originalUrl: '/todos/deleted' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/todos/deleted');
      location.reload();
      console.log('The dialog was closed');
    });
  }

  onLogout() {
    sessionStorage.clear();
    this.router.navigateByUrl("login")
  }

}
