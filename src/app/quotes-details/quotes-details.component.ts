import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input()
  quote!: Quotes;

  constructor() { }
  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(deleteyes:boolean){
      this.deleteQuote.emit(deleteyes);
  }



  upVote(){
    this.quote.upVote++;
}


downVote(){
    this.quote.downVote++;
}

  ngOnInit(): void {
  }

}
