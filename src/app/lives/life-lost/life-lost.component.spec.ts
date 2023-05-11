import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeLostComponent } from './life-lost.component';

describe('LifeLostComponent', () => {
  let component: LifeLostComponent;
  let fixture: ComponentFixture<LifeLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeLostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
