import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzModalService } from 'ng-zorro-antd/modal';

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
  constructor(private msg: NzMessageService, private modal: NzModalService) { }
  @Input() isMultipleFile: any;

  fileList: any[] = [];

  onTouched = () => { };

  onChange = (files: any[]) => { };
  disable = false;
  writeValue(files: any[]): void {
    this.fileList = files && files.length > 0 ? files : [];
    this.onChange(this.fileList);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  onHandleChangeValue(info: NzUploadChangeParam): void {

    if (info.file.status === 'done') {
      const uploadedFile = info.fileList[info.fileList.length - 1];

      const existingFile = this.fileList.find(file => file.name === uploadedFile.name);

      if (existingFile) {
        uploadedFile.name = this.addSuffixToFileName(existingFile.name);
      }
      this.msg.success(`${uploadedFile.name} file uploaded successfully`);
      this.writeValue(info.fileList);
      this.onChange(info.fileList);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  private addSuffixToFileName(existingFileName: string): string {
    const fileExtension = existingFileName.split('.').pop();
    const baseFileName = existingFileName.replace(`.${fileExtension}`, '');
    let counter = 1;
    let suffixedFileName = `${baseFileName} (${counter}).${fileExtension}`;

    while (this.fileList.some(file => file.name === suffixedFileName)) {
      counter++;
      suffixedFileName = `${baseFileName} (${counter}).${fileExtension}`;
    }

    return suffixedFileName;
  }
  // showConfirm(): void {
  //   this.modal.confirm({
  //     nzTitle: '<p>This file already exist</p>',
  //     nzContent: '<b>Do you want to add</b>',
  //     nzOnOk: () => uploadedFile.name = this.addSuffixToFileName(existingFile.name)
  //   });
  // }
}
