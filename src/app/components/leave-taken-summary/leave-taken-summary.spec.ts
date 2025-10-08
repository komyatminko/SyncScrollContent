import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTakenSummary } from './leave-taken-summary';

describe('LeaveTakenSummary', () => {
  let component: LeaveTakenSummary;
  let fixture: ComponentFixture<LeaveTakenSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveTakenSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTakenSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
