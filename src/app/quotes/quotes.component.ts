import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('Sample quote 1','~by me','liz', new Date(2022,4,9),0,0),
    new Quotes('sample quote 2','~by me','', new Date(2022,4,9),0,0),
    new Quotes('sample quote 3','~by me','', new Date(2022,4,9),0,0),

]
addNewQuote(quote: Quotes) {
  /* function for adding a new quote */
  this.quotes.push(quote)
}
toggleDetails(index:any) {
  /* function for toggling quote details */
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}  
  constructor() { }

  ngOnInit(): void {
  }

}
