import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDialogBox } from './modal-dialog-box';

describe('ModalDialogBox', () => {
  let component: ModalDialogBox;
  let fixture: ComponentFixture<ModalDialogBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDialogBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDialogBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
