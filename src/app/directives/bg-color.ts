import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColor {

  @Input() hoverBgColor: string = 'white';
  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.transition = 'all 0.3s ease'; // Smooth transition for background color
  }

  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.backgroundColor = this.hoverBgColor;
  }
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.backgroundColor = 'white';
  }


}
