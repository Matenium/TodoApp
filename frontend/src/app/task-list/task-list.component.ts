import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TaskService } from '../task.service';

interface Task {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder, private svc: TaskService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.svc.list().subscribe(t => this.tasks = t);
  }

  add() {
    if (this.form.invalid) return;
    this.svc.create(this.form.value).subscribe(() => {
      this.form.reset();
      this.load();
    });
  }

  toggle(task: Task, event: MatCheckboxChange) {
    console.log('toggle', task.id, event.checked);
    this.svc.complete(task.id!, event.checked).subscribe(() => this.load());
  }

  remove(task: Task) {
    console.log('remove', task.id);
    this.svc.delete(task.id!).subscribe(() => this.load());
  }
}
