import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Tomates', 2),
    new Ingredients('50 grams de farine', 1),
    new Ingredients('Olive', 4),
  ];

  ngOnInit() {}
}
