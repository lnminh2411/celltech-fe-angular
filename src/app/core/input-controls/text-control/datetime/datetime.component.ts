import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'celltech-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatetimeComponent),
      multi: true,
    },
  ],
})
export class DatetimeComponent implements ControlValueAccessor {
  @Input() format: any;
  @Input() defaultValue: any;
  date: Date = new Date();
  //date = null;
  onChange: (value: any) => void = () => { };
  onTouch: () => void = () => { };
  disable: boolean = false;
  writeValue(value: any): void {
    this.date = value ? value : null;
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
  onHandleChangeValue(result: Date): void {
    result.setHours(0, 0, 0, 0);
    const year = result.getFullYear().toString();
    const month = (result.getMonth() + 1).toString(); // Note: Months are zero-indexed
    const day = result.getDate().toString();
    const hours = result.getHours().toString();
    const minutes = result.getMinutes().toString();
    const seconds = result.getSeconds().toString();
    const miliSeconds = result.getMilliseconds().toString();
    const value = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.${miliSeconds.padStart(5, '0')}`
    this.writeValue(value);
    this.onChange(value);
  }
}