import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSetting } from './maintenance-setting';

describe('MaintenanceSetting', () => {
  let component: MaintenanceSetting;
  let fixture: ComponentFixture<MaintenanceSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceSetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
