import {
  AfterContentInit, ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  inject,
  Injector,
  Renderer2,
} from '@angular/core';
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
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements AfterContentInit{
  injector = inject(Injector)
  r2 = inject(Renderer2);

  hasError(): boolean {
    return !!this.error();
  }

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
      const control = this.control();
      if (!control) return;

      this.r2.listen(control.element.nativeElement, 'focus', () => {
        this.isFocused = true;
      });

      this.r2.listen(control.element.nativeElement, 'blur', () => {
        this.isFocused = false;
        this.isFilled = !!control.element.nativeElement.value;
      });
    }, {injector: this.injector, manualCleanup: true});
  }
}
