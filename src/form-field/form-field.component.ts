import {Component, contentChild, effect, inject, Injector, runInInjectionContext} from '@angular/core';
import {FfLabelComponent} from './ff-components/ff-label/ff-label.component';
import {FfFormControlDirective} from './ff-components/ff-form-control.directive';
import {FfHintComponent} from './ff-components/ff-hint/ff-hint.component';
import {FfErrorComponent} from './ff-components/ff-error/ff-error.component';
import {FfSuffixComponent} from './ff-components/ff-suffix/ff-suffix.component';
import {FfPrefixComponent} from './ff-components/ff-prefix/ff-prefix.component';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {

  hasError(): boolean {
    return !!this.error();
  }

  injector = inject(Injector)

  label = contentChild<FfLabelComponent>(FfLabelComponent)
  control = contentChild<FfFormControlDirective>(FfFormControlDirective)
  hint = contentChild<FfHintComponent>(FfHintComponent)
  error = contentChild<FfErrorComponent>(FfErrorComponent)
  suffix = contentChild<FfSuffixComponent>(FfSuffixComponent)
  prefix = contentChild<FfPrefixComponent>(FfPrefixComponent)

  isFocused = false;
  isFilled = false;

  ngAfterContentInit() {
    effect(() => {
      const c = this.control(); // берём текущую директиву
      if (!c) return; // ещё не создано
      const native = c.element.nativeElement;

      native.addEventListener('focus', () => this.isFocused = true);
      native.addEventListener('blur', () => {
        this.isFocused = false;
        this.isFilled = !!native.value;
      });
    }, {injector: this.injector, manualCleanup: true});
  }

}
