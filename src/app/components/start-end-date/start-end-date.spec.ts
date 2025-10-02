import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartEndDate } from './start-end-date';

describe('StartEndDate', () => {
  let component: StartEndDate;
  let fixture: ComponentFixture<StartEndDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartEndDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartEndDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
