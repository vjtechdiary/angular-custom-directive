import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(e: ElementRef) {
    e.nativeElement.style.background = 'yellow';
    // More styles can be added here based on requirement
    // All will execute when the direcive will get apply to the HTML element
   }

}