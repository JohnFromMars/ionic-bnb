import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: '1',
      title: 'burger',
      imageUrl: 'https://www.shutterstock.com/zh-Hant/image-photo/group-friends-eating-fast-food-burgers-1058905814',
      ingredients: ['tets']
    },
    {
      id: '2',
      title: 'Tahi chicken',
      imageUrl: 'https://www.google.com/maps/uv?pb=!1s0x3442abb94a1ae6a1%3A0xe7968f8d6e94b097!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNN0A3NWVvU11En3-w6lIOO5JT3fiLazlQRCSJO%3Dw260-h175-n-k-no!5zYnVyZ2VyIC0gR29vZ2xlIOaQnOWwiw!15sCgIgAQ&imagekey=!1e10!2sAF1QipMW4Q3tq-akRnOtSru6_llMu7Y-jbGSPQjKkF8D&hl=zh-TW#',
      ingredients: ['tets']
    },
    {
      id: '3',
      title: 'Salad',
      imageUrl: 'https://www.google.com/maps/uv?pb=!1s0x3442abb94a1ae6a1%3A0xe7968f8d6e94b097!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNN0A3NWVvU11En3-w6lIOO5JT3fiLazlQRCSJO%3Dw260-h175-n-k-no!5zYnVyZ2VyIC0gR29vZ2xlIOaQnOWwiw!15sCgIgAQ&imagekey=!1e10!2sAF1QipMW4Q3tq-akRnOtSru6_llMu7Y-jbGSPQjKkF8D&hl=zh-TW#',
      ingredients: ['tets']
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
