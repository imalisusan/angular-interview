import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightRows]'
})
export class HighlightRowsDirective {
  @Input('appHighlightRows') patient: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.patient.mostVisits) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    }
  }
}
