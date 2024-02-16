import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component-control',
  templateUrl: './component-control.component.html',
  styleUrls: ['./component-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComponentControlComponent),
      multi: true
    }
  ]
})
export class ComponentControlComponent implements ControlValueAccessor {
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: '',
      description: ''
    });

    this.myForm.valueChanges.subscribe(value => {
      //this.writeValue(value);
      this.onChange((value))
    });
  }
  @Input() defaultValue: any;
  value!: string;
  onChange: (value: string) => void = () => { };
  onTouch: () => void = () => { };
  disable: boolean = false;
  myForm!: FormGroup;

  writeValue(obj: string): void {
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
}
