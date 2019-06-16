import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueHighlight]'
})
export class BlueHighlightDirective {

  constructor(private elem:ElementRef) { 
    console.log('current Element:', elem);
    // elem.nativeElement.innerText= 'Dynamic text innerHTML';
    elem.nativeElement.style.color = `#0000ff`;
    elem.nativeElement.style.fontStyle = 'italic';
    elem.nativeElement.style.backgroundColor   = '#c7c7ff';
  }

}
