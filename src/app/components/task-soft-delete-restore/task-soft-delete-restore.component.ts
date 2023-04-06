import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-soft-delete-restore',
  templateUrl: './task-soft-delete-restore.component.html',
  styleUrls: ['./task-soft-delete-restore.component.css']
})
export class TaskSoftDeleteRestoreComponent {

  task!: Task;

  constructor(
  private taskService: TaskService,
  @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) { }

  ngOnInit(): void {
    this.task = this.data.task;
  }

  restoreTask(id:number): void {
    if(this.task.id){
      this.taskService.restoreSoftDeletedTask(this.task.id).subscribe(
        () => {
          console.log('Task soft deleted successfully!');
        }, error => {
          console.log('Error occurred while soft deleting task:', error);
        }
      );
    }
  }

}
