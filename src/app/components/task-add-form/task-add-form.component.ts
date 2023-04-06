import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.css']
})
export class TaskAddFormComponent implements OnInit {

  tasks: Task[]=[];
  taskForm!: FormGroup;
  validMessage?: string;

  constructor(
    private dialogRef: MatDialogRef<TaskAddFormComponent>,
    private router: Router, 
    private taskService: TaskService, 
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      description: new FormControl('', [
        Validators.required
      ]),
      dueDate: new FormControl('', []),
      category: new FormControl('', []),
    });

  }

  submitTaskForm(){
    if(this.taskForm.valid){
      this.taskService.addTasks(this.taskForm.value).subscribe(
        data=>{
          this.taskForm.reset();
          this.dialogRef.close();
          alert('New Task has been Added!')
          return true;
        }
      )}

}
}
