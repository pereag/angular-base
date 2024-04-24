import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://fastly.picsum.photos/id/46/200/300.jpg?hmac=hO6W_-hkJCRf3aWSzs0SkaWPFlMhZsixxrObPW_sFaY'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://fastly.picsum.photos/id/46/200/300.jpg?hmac=hO6W_-hkJCRf3aWSzs0SkaWPFlMhZsixxrObPW_sFaY'
    ),
  ];

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
