import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GaragesService } from '../../../../core/services/garages.service';
import { Garage } from '../../../../core/models/garage.model';
import { GarageMultiSelect } from '../../components/garage-multi-select/garage-multi-select';
import { GaragesTable } from '../../components/garages-table/garages-table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-garages-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, GarageMultiSelect, GaragesTable],
  templateUrl: './garages-page.html',
  styleUrl: './garages-page.scss',
})
export class GaragesPage implements OnInit {
  govGarages: Garage[] = [];       // מוסכים מה-API הממשלתי
  dbGarages: Garage[] = [];        // מוסכים שנשמרו במסד
  selectedGarages: Garage[] = [];  // בחירת המשתמש במולטי-סלקט
  loading = false;

  constructor(private garagesService: GaragesService) { }

  ngOnInit(): void {
    this.loadDbGarages();
    this.loadGovGarages();
  }

  loadGovGarages() {
    this.loading = true;
    this.garagesService.fetchFromGov().subscribe({
      next: (data) => {
        this.govGarages = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  loadDbGarages() {
    this.garagesService.getAll().subscribe({
      next: (data) => this.dbGarages = data,
      error: (err) => console.error(err)
    });
  }

  onSelectionChange(garages: Garage[]) {
    this.selectedGarages = garages;
  }

  addSelectedGarages() {
    if (!this.selectedGarages.length) return;

    const newGarages = this.selectedGarages.filter(
      g => !this.dbGarages.some(db => db.garageNumber === g.garageNumber)
    );

    newGarages.forEach((garage) => {
      this.garagesService.addGarage(garage).subscribe({
        next: (saved) => {
          this.dbGarages = [...this.dbGarages, saved];        },
        error: (err) => console.error(err)
      });
    });
  }
}
