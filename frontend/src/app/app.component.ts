import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">Todo App</mat-toolbar>
    <div style="padding:16px; max-width:800px; margin:0 auto;">
      <app-task-list></app-task-list>
    </div>
  `
})
export class AppComponent { }
