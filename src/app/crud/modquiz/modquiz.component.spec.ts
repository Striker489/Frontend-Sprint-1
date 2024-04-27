import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModquizComponent } from './modquiz.component';

describe('ModquizComponent', () => {
  let component: ModquizComponent;
  let fixture: ComponentFixture<ModquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModquizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
