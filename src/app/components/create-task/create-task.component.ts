import { Component, ElementRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { CreateTaskService } from '@components/services/create-task.service';
import { FormElementType } from '@components/services/form-element.type';
import { KeyValuePair } from '@core/core.model';
import { DynamicForm } from '@shared/custom-input-controls/dynamic/form/form.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  person_in_charge: any[] = [
    {
      "id": "fc46d4e7-b867-47e0-9876-7ac44c814abe",
      "value": "Kara Schultz"
    },
    {
      "id": "2d86956a-7e05-4c70-94ad-e2ad4b35aef3",
      "value": "Manuel Ebert MD"
    },
    {
      "id": "ae394c37-4537-4465-9d59-5d9ad61cdd1f",
      "value": "Marshall Hammes"
    },
    {
      "id": "e9d0890b-2c0d-400c-a9a9-033ad84a55f5",
      "value": "Deanna Wiza"
    },
    {
      "id": "12656f35-9214-4c4a-825e-547e2b71ff00",
      "value": "Mr. Frankie Cole"
    },
    {
      "id": "ea853d61-dc8a-4937-ba24-8ba5a376fb98",
      "value": "Dora Corkery"
    },
    {
      "id": "3de75f7e-55e9-419d-acdc-e28f4430acce",
      "value": "Christie Langworth-Bradtke"
    },
    {
      "id": "a904ca64-de77-46a5-87f7-d72c9c00ca81",
      "value": "Casey Cartwright"
    },
    {
      "id": "a6f85409-fce5-46f3-83bb-9e38f17f8073",
      "value": "Traci Bartoletti"
    },
    {
      "id": "56ee8276-b7df-4c4e-83de-b283f437aee0",
      "value": "Forrest Hodkiewicz"
    }
  ]
  task_status: any[] = [
    {
      "id": "a929e14e-cb77-44d9-97ef-d401d8daadc4",
      "value": "To Do"
    },
    {
      "id": "b29d85e5-fd60-43d6-9fc9-c3da5f8c2af3",
      "value": "In Progress"
    },
    {
      "id": "ee3b8f17-ab40-4e83-98a0-a39c8bd1222f",
      "value": "Blocked"
    },
    {
      "id": "7a78d8f4-5ca8-468e-b7fc-eaeed22cd421",
      "value": "Completed"
    },
    {
      "id": "dff9c6e0-7fef-4655-83b6-1be624363e73",
      "value": "Cancelled"
    }
  ]
  project: any[] = [
    {
      "id": "3e94b13e-bceb-437a-a0a5-9a9c690151b5",
      "value": "Ergonomic Granite Table"
    },
    {
      "id": "740357ca-2599-4ad7-965c-115bf09ff0c2",
      "value": "Modern Plastic Salad"
    },
    {
      "id": "14ac9e78-a0fc-4d19-9593-a2cdb666d326",
      "value": "Fantastic Frozen Keyboard"
    },
    {
      "id": "56f5eace-bf63-45d1-88fc-f8d396df272e",
      "value": "Elegant Metal Shoes"
    },
    {
      "id": "a2285970-801b-4ae6-b61b-415c878e6bda",
      "value": "Recycled Soft Fish"
    },
    {
      "id": "ffde5c39-7972-4ef2-a83d-f50f38f6ce25",
      "value": "Tasty Plastic Hat"
    },
    {
      "id": "ce6845f8-0f2a-4bac-a301-87f6155ae356",
      "value": "Elegant Steel Ball"
    },
    {
      "id": "919cd74b-9558-4cfe-894c-8736478a3b29",
      "value": "Handcrafted Plastic Cheese"
    },
    {
      "id": "fef4999f-74eb-4a0a-adc8-d6bbd88fce62",
      "value": "Ergonomic Rubber Salad"
    },
    {
      "id": "54e2d917-f467-4cd1-a97b-7f6c65c2d2ed",
      "value": "Luxurious Concrete Table"
    }
  ]
  tree_data: any[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ]
  form!: FormGroup;
  createTaskForm!: any;
  fieldSetting: any;
  actionSetting: any;
  firstErrorElement!: ElementRef;
  constructor(
    private createTaskService: CreateTaskService,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {
    this.createTaskService.getData().subscribe((response) => {
      this.createTaskForm = response.data.settingForm;
      this.fieldSetting = response.data.settingFieldComponents;
      this.actionSetting = response.data.settingActionComponents;
      this.createLayoutForm();
    });
  }
  async createLayoutForm() {
    this.form = this.formBuilder.group({});
    this.createTaskForm.settings.formLayout.forEach((row: any) => {
      row.forEach((column: any) => {
        const isRequired = this.isFieldRequire(column.componentText);
        const isHidden = this.isFieldShown(column.componentText);
        if (this.getElementType(column.componentText) === "FILE") {
          const formControl = this.formBuilder.control({ value: [], disabled: this.isFieldReadonly(column.componentText) }, isRequired ? Validators.required : null);
          this.form.addControl(column.componentText, formControl);
        }
        const formControl = this.formBuilder.control({ value: '', disabled: this.isFieldReadonly(column.componentText) }, isRequired ? Validators.required : null);
        //const formControl = this.formBuilder.control(null);
        this.getFieldStyle(column.componentText);
        this.form.addControl(column.componentText, formControl);
        if (isHidden) {
          formControl.disable();
        }
      });
    });
  }
  getSettingField(componentText: string) {
    const settingFieldArray = Object.values<any>(this.fieldSetting);
    return settingFieldArray.find((obj) => obj.componentText === componentText);
  }

  isFieldShown(field: string): boolean {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.hidden ?? false;
  }

  isFieldReadonly(field: string): boolean {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.readonly ?? false;
  }

  isFieldRequire(field: string): boolean {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.required ?? false;
  }

  isClearAfterSubmit(field: string): boolean {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.clearAfterSubmit ?? false;
  }

  isMultipleFile(field: string): boolean {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.multipleValue ?? false;
  }

  getElementType(field: string): FormElementType {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.formElementType;
  }

  getDefaultValue(field: string): string {
    const settingField = this.getSettingField(field);
    return (settingField?.settings?.form?.useDefaultValue) ? settingField?.settings?.form?.defaultValue : '';
  }

  getFieldStyle(field: string): {
    fontSize?: string;
    fontColor?: string;
    backgroundColor?: string;
  } {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.view ?? {};
  }

  getActionIcon(field: string): string {
    const settingActionArray = Object.values<any>(this.actionSetting);
    const settingAction = settingActionArray.find(
      (obj) => obj.componentText === field
    );
    return settingAction?.settings?.settings?.icon || '';
  }

  getActionId(field: string): string {
    const settingActionArray = Object.values<any>(this.actionSetting);
    const settingAction = settingActionArray.find((obj) => obj.name === field);
    return settingAction?.id || '';
  }
  getFormat(field: string): string {
    const settingField = this.getSettingField(field);
    return settingField?.settings?.form?.format ?? {};
  }

  onAction(action: any) {
    if (action.name === 'Close') {
      this.closeButton();
    } else {
      this.saveButton();
    }
  }
  closeButton() { }
  saveButton() {
    const dynamicFormData: KeyValuePair<any> = {};

    Object.keys(this.form.controls).forEach(key => {
      dynamicFormData[key] = this.form.get(key)!.value;
    });
    Object.keys(dynamicFormData).forEach(key => {
      if (this.getElementType(key) === "DROPDOWN") {
        const textValue = this.getTextValue(key, dynamicFormData[key]);
        dynamicFormData[key + "_TEXT"] = textValue;
      } else if (this.getElementType(key) === "TREE_DROPDOWN") {
        const textValue = this.getTitleByKey(dynamicFormData[key], this.getValuesForComponent(key))
        dynamicFormData[key + "_TEXT"] = textValue;
      }
    })
    const myDynamicForm: DynamicForm = {
      tableId: this.createTaskForm.tableId,
      tableName: this.createTaskForm.tableName,
      data: dynamicFormData,
      formId: this.createTaskForm.id,
      actionId: this.getActionId('Save'),
    };
    if (this.form.valid) {
      this.createTaskService.create(myDynamicForm, 'CREATE', '');
      Object.keys(this.form.controls).forEach(key => {
        if (this.isClearAfterSubmit(key))
          this.form.controls[key].reset('');
      });
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.scrollIfFormHasErrors(this.form).then(() => {
            // Run any additional functionality if you need to. 
          });
        }
      });
    }

  }
  onSubmit() {
    // Handle form submission
  }
  getValuesForComponent(componentText: string) {
    if (componentText === 'PERSON_IN_CHARGE') {
      return this.person_in_charge;
    } else if (componentText === 'PROJECT') {
      return this.project;
    } else if (componentText === 'TASK_STATUS') {
      return this.task_status;
    } else if (componentText === 'KPI') {
      return this.tree_data;
    } else {
      return [];
    }
  }
  getTextValue(name: string, id: string) {
    //debugger;//eslint-disable-line
    const dataArray = this.getValuesForComponent(name);
    if (dataArray.length === 0) {
      return '';
    }
    const data = dataArray.find((obj) => obj.id === id);
    if (!data) {
      return '';
    }
    const value = data.value;
    return value;
  }
  getTitleByKey(key: string, nodes: any[]): string | null {
    for (const node of nodes) {
      if (node.key === key) {
        return node.title;
      }
      if (node.children) {
        const title = this.getTitleByKey(key, node.children);
        if (title !== null) {
          return title;
        }
      }
    }
    return null;
  }
  scrollTo(el: Element): void {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToError(): void {
    const firstElementWithError = document.querySelector('.ng-invalid');
    this.scrollTo(firstElementWithError!);
  }

  async scrollIfFormHasErrors(form: FormGroup): Promise<any> {
    await form.invalid;
    this.scrollToError();
  }
  getItem(newItem: any) {

  }
}
