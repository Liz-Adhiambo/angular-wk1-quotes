import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.background ="rgb(255, 0, 255)";
  }

}
