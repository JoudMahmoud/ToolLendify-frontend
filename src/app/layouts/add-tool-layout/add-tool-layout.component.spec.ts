import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolLayoutComponent } from './add-tool-layout.component';

describe('AddToolLayoutComponent', () => {
  let component: AddToolLayoutComponent;
  let fixture: ComponentFixture<AddToolLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToolLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToolLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
