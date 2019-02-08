import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCreateComponent } from './workspace-create.component';

describe('WorkspaceCreateComponent', () => {
  let component: WorkspaceCreateComponent;
  let fixture: ComponentFixture<WorkspaceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
