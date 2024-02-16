import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntModule } from "@core/modules/ant-design/ant.module";
import { InputControlModule } from "@core/input-controls/input-control.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { ReferenceDropdownComponent } from './components/reference-dropdown/reference-dropdown.component';
import { Bai1Component } from './components/bai1/bai1.component';

@NgModule({

  declarations: [
    AppComponent,
    CreateTaskComponent,
    DynamicInputComponent,
    DynamicTableComponent,
    ReferenceDropdownComponent,
    Bai1Component,
  ],
  imports: [
    AntModule,
    BrowserModule,
    AppRoutingModule,
    InputControlModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
