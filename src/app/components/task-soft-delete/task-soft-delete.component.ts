import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-task-soft-delete',
  templateUrl: './task-soft-delete.component.html',
  styleUrls: ['./task-soft-delete.component.css']
})
export class TaskSoftDeleteComponent {

  task!: Task;

 constructor(
 private taskService: TaskService,
 @Inject(MAT_DIALOG_DATA) public data: { task: Task }
 ) { }

 ngOnInit(): void {
   this.task = this.data.task;
 }

 softDelete(id:number): void {
   if(this.task.id){
     this.taskService.softDelete(this.task.id).subscribe(
       () => {
         console.log('Task soft deleted successfully!');
       }, error => {
         console.log('Error occurred while soft deleting task:', error);
       }
     );
   }
 }


}

