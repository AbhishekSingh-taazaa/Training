import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttributedirect]'
})
export class AttributedirectDirective {

  @HostBinding('style.border') hostborder : string;
  @Input() color : string;

  constructor(private el : ElementRef , private render : Renderer2) { }

  ChangeColor(color : string){

    this.render.setStyle(this.el.nativeElement,'color',color);

  }
 
 @HostListener('mouseenter') koo(){

  this.hostborder = '3px solid #1c241e';
  this.ChangeColor(this.color);

 }
 @HostListener('mouseleave') too(){

  this.hostborder = '';
  this.ChangeColor("black");

 }

}
