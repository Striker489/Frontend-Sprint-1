import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModchapterComponent } from './modchapter.component';

describe('ModchapterComponent', () => {
  let component: ModchapterComponent;
  let fixture: ComponentFixture<ModchapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModchapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModchapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
