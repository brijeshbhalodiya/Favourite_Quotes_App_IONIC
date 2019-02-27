import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotesService } from '../../services/quotes';
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService
  ){}

  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      message: "Are you sure you want to add quote?",
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.quotesService.addQuoteToFavorite(selectedQuote);
        }
      },{
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No');
        }
      }]
    });

    alert.present();

  }

}
