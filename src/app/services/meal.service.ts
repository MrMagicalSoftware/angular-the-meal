import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

 
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

 
  constructor(private http: HttpClient) {}

  getMeal(): Observable<Meal> {
    return this.http.get<Meal>(this.apiUrl);

  }



}
