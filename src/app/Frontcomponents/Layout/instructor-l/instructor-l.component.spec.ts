import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorLComponent } from './instructor-l.component';

describe('InstructorLComponent', () => {
  let component: InstructorLComponent;
  let fixture: ComponentFixture<InstructorLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
