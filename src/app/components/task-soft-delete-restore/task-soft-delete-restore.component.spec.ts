import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSoftDeleteRestoreComponent } from './task-soft-delete-restore.component';

describe('TaskSoftDeleteRestoreComponent', () => {
  let component: TaskSoftDeleteRestoreComponent;
  let fixture: ComponentFixture<TaskSoftDeleteRestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskSoftDeleteRestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskSoftDeleteRestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
