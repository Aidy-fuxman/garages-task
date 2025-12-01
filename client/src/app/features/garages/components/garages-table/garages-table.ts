import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Garage } from '../../../../core/models/garage.model';

@Component({
  selector: 'app-garages-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './garages-table.html',
  styleUrl: './garages-table.scss',
})
export class GaragesTable {
  @Input() items: Garage[] = [];

  displayedColumns: string[] = [
    'garageNumber',
    'name',
    'address',
    'city',
    'telephone'
  ];
  
}
