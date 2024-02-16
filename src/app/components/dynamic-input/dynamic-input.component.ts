import { Component, Input } from '@angular/core';
import { FormElementType } from '@components/model/form-element.type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
  @Input() elementType!: FormElementType;
  @Input() id: any;
  @Input() name!: string;
}
