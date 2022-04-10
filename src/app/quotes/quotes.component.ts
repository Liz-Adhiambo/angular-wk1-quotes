import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes('“Progress is not achieved by luck or accident, but by working on yourself daily.” ','~Epictus','liz', new Date(2022,4,11),0,0),
    new Quotes('"Positive Vibes"','~Mwai Montana','', new Date(2022,4,9),0,0),
    new Quotes('"We suffer more in imagination than in reality.” ','~Seneca','Liz', new Date(2022,4,9),0,0),

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


highlightHighest() {

  let quotesUpvote = []
  let highestUpVote: number
  for (let j = 0; j < this.quotes.length; j++) {
    quotesUpvote.push(this.quotes[j].upVote)
  }
  quotesUpvote.sort(function (a, b) {
  return b - a
})

highestUpVote = quotesUpvote[0]
return highestUpVote;
}


  constructor() { }

  ngOnInit(): void {
  }

}
