import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderinstructorComponent } from './headerinstructor.component';

describe('HeaderinstructorComponent', () => {
  let component: HeaderinstructorComponent;
  let fixture: ComponentFixture<HeaderinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderinstructorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
