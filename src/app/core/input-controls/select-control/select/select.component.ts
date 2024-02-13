import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { isFunction } from 'lodash';

@Component({
  selector: 'celltech-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent implements ControlValueAccessor {
  originalValue: any;
  @Input() displayField!: string; // key chua data can hien
  @Input() selectedValue: any;
  @Input() defaultValue!: string;
  @Input() showAllText!: string;
  @Input() showAllTextDisabled!: boolean;
  @Input() valueField!: string; // key chua id cua data
  @Input() isDisabled!: any;
  @Input() values!: any[];
  @Input() mode!: string;

  @Output() selected = new EventEmitter();
  value: any;
  public touched!: () => void;
  private onChange = (value: any) => { };
  setOriginalValue(value: any) {
    this.originalValue = value;
  }
  writeValue(value: string): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onHandleChangeValue(value: any) {
    this.value = value;
    this.writeValue(this.value);
    if (this.selectedValue) {
      this.selectedValue = this.value;
    }
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
    //debugger;//eslint-disable-line
    this.selected.emit(this.value);
  }
  onInput(event: any) {

    //this.values.push({ id: "", value: event.target.value });
    //debugger;//eslint-disable-line
  }
  trackByValue(index: number, value: any): string {
    //debugger;//eslint-disable-line
    return value[this.displayField]; // Assuming 'valueField' is a unique identifier for each value
  }
}
