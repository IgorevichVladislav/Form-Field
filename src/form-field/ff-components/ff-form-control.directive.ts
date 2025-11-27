import {Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[ffFormControl]'
})
export class FfFormControlDirective {

  element = inject(ElementRef);

  id = input<string>()

}
