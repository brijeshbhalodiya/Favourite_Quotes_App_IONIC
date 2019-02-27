import { Component, OnInit } from '@angular/core';
import { Quote } from '../../data/quotes.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit(){
    this.quoteCollection = quotes;
  }
}