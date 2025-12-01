import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragesTable } from './garages-table';

describe('GaragesTable', () => {
  let component: GaragesTable;
  let fixture: ComponentFixture<GaragesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaragesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaragesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
