import { Component } from '@angular/core';
import { CreateTaskService } from '@components/services/create-task.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.scss']
})
export class Bai1Component {
  constructor(private service: CreateTaskService, private fb: FormBuilder) {
    this.myForm = this.fb.group({});
  }
  ngOnInit() {
    this.service.getDataFromJson('../../../assets/bai1.json').subscribe(response => {
      this.jsonData = response.ContainerSettings.ComponentItem;
    });
    const formControl = this.fb.control({});
    this.myForm.addControl("data", formControl);
  }
  myForm!: FormGroup;
  jsonData!: any;
  onSubmit() { }
  submit() {

    console.log(this.service.bai1(this.myForm.value));
  }
}
