import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPermDeleteConfirmComponent } from './task-perm-delete-confirm.component';

describe('TaskPermDeleteConfirmComponent', () => {
  let component: TaskPermDeleteConfirmComponent;
  let fixture: ComponentFixture<TaskPermDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPermDeleteConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPermDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
