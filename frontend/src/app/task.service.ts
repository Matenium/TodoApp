import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Task { id?: number; title: string; description?: string; completed?: boolean }

@Injectable({ providedIn: 'root' })
export class TaskService {
  private base = (window as any).__env?.API_URL || 'http://localhost:8080/api/tasks';
  constructor(private http: HttpClient) {}

  list(): Observable<Task[]> { return this.http.get<Task[]>(this.base); }
  create(t: Partial<Task>): Observable<Task> { return this.http.post<Task>(this.base, t); }
  complete(id: number, completed: boolean) { return this.http.patch(`${this.base}/${id}/complete?completed=${completed}`, {}); }
  delete(id: number) { return this.http.delete(`${this.base}/${id}`); }
}
