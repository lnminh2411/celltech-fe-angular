import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { isFunction } from 'lodash';


declare const tinymce: any;
@Component({
  selector: 'celltech-rich-text',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RichtextComponent),
      multi: true
    }
  ]
})

export class RichtextComponent implements ControlValueAccessor {
  @Input() id: string = ''
  private editor: any;
  onTouch: () => void = () => { };
  onChange = (value: any) => { };
  disable = false;
  ngOnInit() {

  }
  ngAfterViewInit() {
    this.initializeTinyMCE();
  }
  private initializeTinyMCE() {
    const editorId = `tinymce-editor-${this.id}`;
    tinymce.init({
      base_url: '/tinymce',
      suffix: '.min',
      plugins: 'preview',
      toolbar:
        'preview undo redo | formatselect | bold italic backcolor | \
         alignleft aligncenter alignright alignjustify | \
         bullist numlist outdent indent | removeformat | help',
      selector: `#${editorId}`,
      setup: (editor: any) => {
        this.editor = editor;
        editor.on('input', () => {
          const content = editor.getContent();
          this.onHandleChangeValue(content)
        });
      },
    });
  }
  // ControlValueAccessor methods
  writeValue(value: any) {
    if (this.editor) {
      const currentContent = this.editor.getContent();
      //debugger; //eslint-disable-line
      if (value !== currentContent) {
        this.editor.setContent(value);
      }
    }
  }
  registerOnChange(fn: any) {
    this.onChange = fn
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disable = isDisabled;
  }
  onHandleChangeValue(value: any) {
    this.writeValue(value);
    this.onChange(value)
  }
}
