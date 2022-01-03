import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format;

  constructor(private el1:ElementRef) { //ElementRef is a service defined in angular which give us access to dom object
  }

  @HostListener('blur') onBlur(){//hostlistener decorator is used to subscribe to the events raised from the host dom object
    let value:  string = this.el1.nativeElement.value;
    if(this.format == 'lowercase')
      this.el1.nativeElement.value = value.toLowerCase();
    else
      this.el1.nativeElement.value = value.toUpperCase();
  }
}
