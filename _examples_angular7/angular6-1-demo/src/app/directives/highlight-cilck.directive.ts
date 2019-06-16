import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlightCilck]'
})
export class HighlightCilckDirective {

  constructor(private elem: ElementRef) {
    console.log('current Element:', elem);
    // elem.nativeElement.innerText= 'Dynamic text innerHTML';
    elem.nativeElement.style.color = `#ff0000`;
    elem.nativeElement.style.backgroundColor = '#ffd5d5';
    elem.nativeElement.style.cursor = 'pointer';
  }

  // element click event - @Hostlistener('eventName',[args])
  @HostListener('click') showAlert() {
    window.alert('Custom Directive - @HostListener events!');
  }

  // use global objects like document/window click - @Hostlistener('target:EVENT',[args])
  // @HostListener('document:click', ['$event'])
  // showElementClicked(elem) {
  //   window.alert('Document Clicked');
  // }
}
