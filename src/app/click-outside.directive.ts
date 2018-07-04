import { Directive, ElementRef, HostListener, Output, Input, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  

  @Output() public clickOutside=new EventEmitter();
  

  constructor(private _elementRef: ElementRef) { }


  @HostListener('document:click',['$event.target'])

  public onClick(targetElement) {
    if(targetElement.id == "autoComp") return;
    const isClickInside = this._elementRef.nativeElement.contains(targetElement);
    if(!isClickInside){
      this.clickOutside.emit(null);
    }
  }
}