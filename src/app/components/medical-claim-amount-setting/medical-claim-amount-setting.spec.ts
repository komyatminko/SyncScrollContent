import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalClaimAmountSetting } from './medical-claim-amount-setting';

describe('MedicalClaimAmountSetting', () => {
  let component: MedicalClaimAmountSetting;
  let fixture: ComponentFixture<MedicalClaimAmountSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalClaimAmountSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalClaimAmountSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
