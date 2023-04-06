import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
     Authorization: `Bearer ${'my-auth-token'}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = "http://localhost:8080/api/v1/todos";

  constructor(private http: HttpClient) { }

  readTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}`);
  }

  readTasksById(id:number): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseUrl}`+ id);
  }

  addTasks(task: Task): Observable<Task[]>{
    let body = JSON.stringify(task);
    return this.http.post<Task[]>(`${this.baseUrl}`, body, httpOptions);
  }

  editTasks(id:number, updateTask: Task): Observable<Task>{
    let body = JSON.stringify(updateTask);
    return this.http.put<Task>(`${this.baseUrl}/`+ id, body, httpOptions);
  }

  softDelete(id:number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/`+ id)
  }

  restoreSoftDeletedTask(id: number): Observable<Task> {
    const url = `${this.baseUrl}/deleted/${id}`;
    return this.http.put<Task>(url, {});
  }

  completeDelete(id:number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseUrl}/deleted/`+ id)
  }

}
