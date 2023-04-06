import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-perm-delete-confirm',
  templateUrl: './task-perm-delete-confirm.component.html',
  styleUrls: ['./task-perm-delete-confirm.component.css']
})
export class TaskPermDeleteConfirmComponent implements OnInit {

  task!: Task;

  constructor(
  private taskService: TaskService,
  @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) { }

  ngOnInit(): void {
    this.task = this.data.task;
  }

  completeDelete(id:number): void {
    if(this.task.id){
      this.taskService.completeDelete(this.task.id).subscribe(() => {
        console.log('Deleted Successfully');
      });
    }
  }


}
