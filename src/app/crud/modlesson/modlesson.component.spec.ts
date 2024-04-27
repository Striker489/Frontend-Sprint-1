import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModlessonComponent } from './modlesson.component';

describe('ModlessonComponent', () => {
  let component: ModlessonComponent;
  let fixture: ComponentFixture<ModlessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModlessonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModlessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
