import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  highlightColor: String;

    //서비스 주입받고
  constructor(private  el:ElementRef) {
    //dom 노드 접근 가능

    //this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter')
  mouseenter(){
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(){
    this.el.nativeElement.style.backgroundColor = null;
  }



}
