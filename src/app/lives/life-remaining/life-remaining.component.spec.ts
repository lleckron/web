import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeRemainingComponent } from './life-remaining.component';

describe('LifeRemainingComponent', () => {
  let component: LifeRemainingComponent;
  let fixture: ComponentFixture<LifeRemainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeRemainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeRemainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
