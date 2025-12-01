import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageMultiSelect } from './garage-multi-select';

describe('GarageMultiSelect', () => {
  let component: GarageMultiSelect;
  let fixture: ComponentFixture<GarageMultiSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageMultiSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageMultiSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
