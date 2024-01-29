import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'celltech-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TreeSelectComponent),
      multi: true
    }
  ]
})
export class TreeSelectComponent implements ControlValueAccessor {
  @Input() nodes: any[] = [];
  @Input() defaultValue: any;
  value?: string;
  onChange: (value: string) => void = () => { };
  onTouch: () => void = () => { };
  disable: boolean = false;
  writeValue(value: any): void {
    this.value = value ? value : null;
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
  onHandleChangeValue(value: any): void {
    //debugger;//eslint-disable-line
    this.writeValue(value)
    this.onChange(value)
  }
}
