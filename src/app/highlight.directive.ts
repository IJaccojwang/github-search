import { Directive,ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

@HostListener("click") onClicks(){
  this.BgColor("rgba(0,0,0,0.5)")
}

@HostListener("dblclick") onDoubleClicks(){
  this.BgColor("inherit")
}

private BgColor(action:string){
  this.elem.nativeElement.style.backgroundColor=action;

}

}
