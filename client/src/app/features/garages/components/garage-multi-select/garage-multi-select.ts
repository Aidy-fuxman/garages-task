import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Garage } from '../../../../core/models/garage.model';

@Component({
  selector: 'app-garage-multi-select',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './garage-multi-select.html',
  styleUrl: './garage-multi-select.scss',
})
export class GarageMultiSelect {

  @Input() items: Garage[] = [];
  @Output() selectionChange = new EventEmitter<Garage[]>();

  selected: Garage[] = [];

  onSelectChange(value: Garage[]) {
    this.selected = value;
    this.selectionChange.emit(this.selected);
  }
}
