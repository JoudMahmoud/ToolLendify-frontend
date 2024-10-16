import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSideBarComponent } from './address-side-bar.component';

describe('AddressSideBarComponent', () => {
  let component: AddressSideBarComponent;
  let fixture: ComponentFixture<AddressSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
