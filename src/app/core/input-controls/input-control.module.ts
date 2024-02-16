import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AntModule } from "@core/modules/ant-design/ant.module";
import { SortAlphabetPipe } from "src/app/core/input-controls/pipes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectComponent } from "@core/input-controls/select-control";
import { RichtextComponent } from './text-control/richtext/richtext.component';
import { TextComponent } from './text-control/text/text.component';
import { NumberComponent } from './text-control/number/number.component';
import { DatetimeComponent } from './text-control/datetime/datetime.component';
import { FileComponent } from './text-control/file/file.component';
import { TreeSelectComponent } from './select-control/tree-select/tree-select.component';
import { ComponentControlComponent } from './component-control/component-control.component';

@NgModule({
  declarations: [
    SortAlphabetPipe,
    SelectComponent,
    RichtextComponent,
    TextComponent,
    NumberComponent,
    DatetimeComponent,
    FileComponent,
    TreeSelectComponent,
    ComponentControlComponent
  ],
  imports: [
    BrowserModule,
    AntModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SortAlphabetPipe,
    SelectComponent,
    TextComponent,
    RichtextComponent,
    NumberComponent,
    DatetimeComponent,
    FileComponent,
    TreeSelectComponent,
    ComponentControlComponent
  ]
})
export class InputControlModule {
}
