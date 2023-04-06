import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task!: Task;

  constructor(
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: { task: Task }
  ) { }

  ngOnInit(): void {
    this.task = this.data.task;
  }

}
