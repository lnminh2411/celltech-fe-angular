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

  //selectedValue: string = '';

  value: any;
  public touched!: () => void;
  private onChange = (value: any) => { };

  writeValue(value: string): void {
    this.value = value;
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
    this.writeValue(value)
    if (this.selectedValue) {
      this.selectedValue = value;
      console.log("sdkjfhskdjfhdkjf")
    }
    if (isFunction(this.onChange)) {
      this.onChange(this.value);
    }
    this.selected.emit(this.value);
  }
}
