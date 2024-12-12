import { Component, OnInit } from '@angular/core';
import { Meal } from '../../models/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent  implements OnInit{

  myMeal : Meal | undefined;



  constructor(private mealService : MealService){

  }


  ngOnInit(): void {
    this.mealService.getMeal().subscribe((data) =>{
      console.log(data)
      this.myMeal = data
      
    });

  }






}
