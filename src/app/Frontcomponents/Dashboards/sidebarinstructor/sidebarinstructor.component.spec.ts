import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarinstructorComponent } from './sidebarinstructor.component';

describe('SidebarinstructorComponent', () => {
  let component: SidebarinstructorComponent;
  let fixture: ComponentFixture<SidebarinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarinstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
