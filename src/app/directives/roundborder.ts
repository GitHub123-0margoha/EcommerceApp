import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRoundborder]'
})
export class Roundborder {

  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    this.ele.nativeElement.style.position = "relative";
    this.ele.nativeElement.style.transition = "all 0.3s ease";
    this.ele.nativeElement.style.zIndex = "1";
  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.6)";
    this.ele.nativeElement.style.transform = "scale(1.05)";
    this.ele.nativeElement.style.zIndex = "1000";
  }
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    this.ele.nativeElement.style.transform = "scale(1)";
    this.ele.nativeElement.style.zIndex = "1";
  }

}
