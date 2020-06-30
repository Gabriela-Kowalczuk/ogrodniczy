import { Component, OnInit } from '@angular/core';
import { articles } from '../models/article';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {

  articles: articles[] = [
     {
      number: 1,
      name: 'Nasiona Róży',
      price: 17.3,
      vat: 8,
      amount: 79,
      },
       {
        number: 2,
      name: 'Nasiona Marchwi',
      price: 11.3,
      vat: 8,
      amount: 78,
      },
      {
        number: 3,
      name: 'Sadzokni Róża',
      price: 20.3,
      vat: 8,
      amount: 100,
      },
      {
      number: 4,
      name: 'Ziemia Czarnoziem',
      price: 20,
      vat: 23,
      amount: 28,
      },
      {
        number: 5,
        name: 'Grabie',
        price: 29,
        vat: 23,
        amount: 390,
        },
        {
          number: 6,
          name: 'Rękawice ogrodnicze',
          price: 27,
          vat: 23,
          amount: 300,
          },
          {
            number: 7,
            name: 'Nożyce',
            price: 28,
            vat: 23,
            amount: 76,
            }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
