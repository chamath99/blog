import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildexComponent } from './childex.component';

describe('ChildexComponent', () => {
  let component: ChildexComponent;
  let fixture: ComponentFixture<ChildexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
