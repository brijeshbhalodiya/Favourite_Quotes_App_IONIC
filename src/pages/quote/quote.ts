import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;


  constructor(
    private ViewCtrl: ViewController,
    private navParams: NavParams
  ){}

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

    onClose(remove = false){
      this.ViewCtrl.dismiss(remove);
    }

}
