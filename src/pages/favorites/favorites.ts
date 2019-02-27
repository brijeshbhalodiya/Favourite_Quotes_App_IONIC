import { Component } from '@angular/core';
import {NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private quotesService: QuotesService,
    private modelCtrl: ModalController
     ) {}

     ionViewWillEnter(){
       this.quotes = this.quotesService.getFavoritesQuotes();
     }

     onViewQuote(quote: Quote){
      const model = this.modelCtrl.create(QuotePage, quote);
      model.present();
      model.onDidDismiss(remove => {
        
      });
     }

}
