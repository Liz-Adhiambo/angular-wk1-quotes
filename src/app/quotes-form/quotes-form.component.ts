import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Quotes } from '../quote';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuotes = new Quotes ("","",new Date());
    @Output() addQuotes = new EventEmitter < Quotes > ();

    // function that creates a new quote array

    submittingQuote(){

        this.addQuotes.emit(this.newQuotes);
        this.newQuotes = new Quotes("","",new Date())
    }

  constructor() { }

  ngOnInit(): void {
  }

}
