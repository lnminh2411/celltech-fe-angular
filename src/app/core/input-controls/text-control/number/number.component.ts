import { Component, Input, forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'celltech-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberComponent),
      multi: true
    }
  ]
})
export class NumberComponent implements ControlValueAccessor {
  constructor() { }
  @Input() format: any;
  @Input() defaultValue: any;
  value!: number;
  onChange: (value: number) => void = () => { };
  onTouch: () => void = () => { };
  disable: boolean = false;

  writeValue(obj: number): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
  onHandleChangeValue(e: any) {
    const value = e.target.value;
    this.writeValue(value);
    this.onChange(value)
  }
}