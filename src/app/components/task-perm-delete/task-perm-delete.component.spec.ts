import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPermDeleteComponent } from './task-perm-delete.component';

describe('TaskPermDeleteComponent', () => {
  let component: TaskPermDeleteComponent;
  let fixture: ComponentFixture<TaskPermDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPermDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPermDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
