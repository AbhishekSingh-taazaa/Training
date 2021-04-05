import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNewdirective]'
})
export class NewdirectiveDirective {

  constructor(private render : Renderer2, private el : ElementRef) { }

  @HostBinding('style.border') hostborder : string;
  color : string;
  ChangeColor(color : string){

    this.render.setStyle(this.el.nativeElement,'color',color);

  }
 
 @HostListener('') koo(){

  this.hostborder = '3px solid #34e360';
  this.ChangeColor(this.color);

 }
 @HostListener('mouseleave') too(){

  this.hostborder = '';
  this.ChangeColor("black");

 }

}
