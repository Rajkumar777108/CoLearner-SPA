import { Directive, HostListener, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorHighlighter]'
})
export class ColorHighlighterDirective {

  constructor(private _ref:ElementRef, private _rend:Renderer2) { }

  @HostListener('mouseover') onMouseOver()
  {
    this._ref.nativeElement.style.color = 'green';
     this._ref.nativeElement.style.font= 'initial';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._ref.nativeElement.style.color = '#007bff';
    this._rend.removeStyle(this._ref.nativeElement,"font");

    // this._ref.nativeElement.style.font='none';
  }

}
