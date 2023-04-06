import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskEditFormComponent } from '../task-edit-form/task-edit-form.component';
import { TaskSoftDeleteComponent } from '../task-soft-delete/task-soft-delete.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.taskService.readTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.tasks = data.filter(task => task.isDeleted === false);
    });
  }

  openTaskViewDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '400px',
      data: { task: task, originalUrl: '/todos' }
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.router.navigate(['/todos']);
      //this.router.navigateByUrl('/todos');
      this.location.replaceState('/todos');
      console.log('The dialog was closed');
    });

  }

  openTaskFormEditDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditFormComponent, {
      width: '500px',
      data: { task: task, originalUrl: '/todos' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/todos');
      location.reload();
      console.log('The dialog was closed');
    });

  }

  openSoftDeleteDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskSoftDeleteComponent
      , {
      width: '500px',
      data: { task: task, originalUrl: '/todos' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.location.replaceState('/todos');
      location.reload();
      console.log('The dialog was closed');
    });
  }

}
