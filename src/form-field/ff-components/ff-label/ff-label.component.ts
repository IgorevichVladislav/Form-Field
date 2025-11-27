import {Component, input} from '@angular/core';

@Component({
  selector: 'ff-label',
  imports: [],
  templateUrl: './ff-label.component.html',
  styleUrl: './ff-label.component.scss'
})
export class FfLabelComponent {
  for = input<string>()
}
