import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-edit-form',
  templateUrl: './task-edit-form.component.html',
  styleUrls: ['./task-edit-form.component.css']
})
export class TaskEditFormComponent implements OnInit {

  task!: Task;
  taskForm!: FormGroup;
  validMessage?: string;

  constructor(
    private dialogRef: MatDialogRef<TaskEditFormComponent>,
    private taskService: TaskService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) {  }

  ngOnInit(): void {
    this.task = this.data.task;
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

submitUpdateTaskForm(){
  if(this.taskForm.valid){
    if(this.task.id){
      this.taskService.editTasks(this.task.id, this.taskForm.value).subscribe(
        data => {
          this.taskForm.reset();
          this.dialogRef.close();
          alert("Task has been Updated!")
          return true;
        }
      );
    }}
}}
