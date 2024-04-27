import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModcourComponent } from './modcour.component';

describe('ModcourComponent', () => {
  let component: ModcourComponent;
  let fixture: ComponentFixture<ModcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModcourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
