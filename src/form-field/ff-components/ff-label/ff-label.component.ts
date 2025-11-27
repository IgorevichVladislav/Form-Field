import {ChangeDetectionStrategy, Component, ElementRef, inject, input} from '@angular/core';

@Component({
  selector: 'ff-label',
  imports: [],
  templateUrl: './ff-label.component.html',
  styleUrl: './ff-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FfLabelComponent {
  for = input<string>()
}
