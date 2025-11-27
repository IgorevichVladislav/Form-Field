import { Component } from '@angular/core';
import {FormFieldComponent} from '../form-field/form-field.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FfLabelComponent} from '../form-field/ff-components/ff-label/ff-label.component';
import {FfHintComponent} from '../form-field/ff-components/ff-hint/ff-hint.component';
import {FfErrorComponent} from '../form-field/ff-components/ff-error/ff-error.component';
import {FfSuffixComponent} from '../form-field/ff-components/ff-suffix/ff-suffix.component';
import {FfPrefixComponent} from '../form-field/ff-components/ff-prefix/ff-prefix.component';

@Component({
  selector: 'app-root',
  imports: [FormFieldComponent, ReactiveFormsModule, FfLabelComponent, FfHintComponent, FfErrorComponent, FfSuffixComponent, FfPrefixComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-field';

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
}
