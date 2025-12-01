import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Garage } from '../models/garage.model';

@Injectable({
  providedIn: 'root'
})
export class GaragesService {

private apiUrl = 'https://localhost:7155/api/garages';

  constructor(private http: HttpClient) {}

  /* שליפת מוסכים מהשרת (שמביא מה-API הממשלתי)*/
  fetchFromGov(): Observable<Garage[]> {
    return this.http.get<Garage[]>(`${this.apiUrl}/fetch`);
  }

  /** שליפת כל המוסכים שקיימים במסד הנתונים*/
  getAll(): Observable<Garage[]> {
    return this.http.get<Garage[]>(this.apiUrl);
  }

  /*הוספת מוסך חדש למסד הנתונים*/
  addGarage(garage: Garage): Observable<Garage> {
    return this.http.post<Garage>(this.apiUrl, garage);
  }
}
