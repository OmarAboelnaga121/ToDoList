import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDashboardComponent } from './to-do-list-dashboard.component';

describe('ToDoListDashboardComponent', () => {
  let component: ToDoListDashboardComponent;
  let fixture: ComponentFixture<ToDoListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
