import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmClockComponent } from './alarm-clock.component';

describe('AlarmClockComponent', () => {
  let component: AlarmClockComponent;
  let fixture: ComponentFixture<AlarmClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
