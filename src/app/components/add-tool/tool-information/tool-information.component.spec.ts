import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolInformationComponent } from './tool-information.component';

describe('ToolInformationComponent', () => {
  let component: ToolInformationComponent;
  let fixture: ComponentFixture<ToolInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
