import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'celltech-upload-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileComponent),
      multi: true
    }
  ]
})
export class FileComponent implements ControlValueAccessor {
  constructor(private msg: NzMessageService) { }
  fileList: any[] = [];

  // Optional: Function to call when the control is touched
  onTouched = () => { };

  // Optional: Function to call when the value changes
  onChange = (files: any[]) => { };
  disable = false;
  writeValue(files: any[]): void {
    this.fileList = files && files.length > 0 ? files : [];
    this.onChange(this.fileList);
  }

  // Register a callback function that should be called when the control's value changes in the UI
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register a callback function that should be called when the control is blurred
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onHandleChangeValue(info: NzUploadChangeParam): void {
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
      this.writeValue(info.fileList);
      this.onChange(info.fileList);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
