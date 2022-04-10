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
    new Quotes('sample quote 2','~by me','', new Date(2022,4,9),2,1),
    new Quotes('sample quote 3','~by me','', new Date(2022,4,9),0,0),

]
addNewQuote(quote: Quotes) {
  /* function for adding a new quote */
  this.quotes.push(quote)
}
toggleDetails(index:any) {
   
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}  

deletingQuote(deleteQuote: any, index: number){
  if(deleteQuote){
      let toDelete =confirm("Are you sure you want to delete this quote?")

      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
