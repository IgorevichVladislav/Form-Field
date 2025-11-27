import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormFieldComponent} from '../form-field/form-field.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FfLabelComponent} from '../form-field/ff-components/ff-label/ff-label.component';
import {FfHintComponent} from '../form-field/ff-components/ff-hint/ff-hint.component';
import {FfErrorComponent} from '../form-field/ff-components/ff-error/ff-error.component';
import {FfSuffixComponent} from '../form-field/ff-components/ff-suffix/ff-suffix.component';
import {FfPrefixComponent} from '../form-field/ff-components/ff-prefix/ff-prefix.component';
import {FfFormControlDirective} from '../form-field/ff-components/ff-form-control.directive';

@Component({
  selector: 'app-root',
  imports: [FormFieldComponent, ReactiveFormsModule, FfLabelComponent, FfHintComponent, FfErrorComponent, FfSuffixComponent, FfPrefixComponent, FfFormControlDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'form-field';

  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>('', [Validators.required, Validators.email])
  });
}
