import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSoftDeleteComponent } from './task-soft-delete.component';

describe('TaskSoftDeleteComponent', () => {
  let component: TaskSoftDeleteComponent;
  let fixture: ComponentFixture<TaskSoftDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSoftDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSoftDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
