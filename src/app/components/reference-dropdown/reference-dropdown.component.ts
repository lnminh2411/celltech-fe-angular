import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CityService } from '@components/services/city.service';

@Component({
  selector: 'app-reference-dropdown',
  templateUrl: './reference-dropdown.component.html',
  styleUrls: ['./reference-dropdown.component.scss']
})
export class ReferenceDropdownComponent {
  @Input() displayField!: string; // key chua data can hien
  constructor(private fb: FormBuilder, private city: CityService) {
    this.myForm = this.fb.group({
      province: '',
      district: '',
      ward: ''
    });
  }
  ngOnInit() {
    this.city.getDataFromJson("../../../assets/tinh_tp.json").subscribe((province) => {
      this.provinces = Object.values(province);
    });
    this.city.getDataFromJson("../../../assets/quan_huyen.json").subscribe((district) => {
      this.districts = Object.values(district);
    });
    this.city.getDataFromJson("../../../assets/xa_phuong.json").subscribe((ward) => {
      this.wards = Object.values(ward);
    });

  }
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  filteredDistricts: any[] = [];
  filteredWards: any[] = [];
  myForm: FormGroup;
  onProvinceChange(selectedProvince: any) {
    this.filteredDistricts = this.districts.filter(data => data.parent_code == selectedProvince.target.value);
    this.myForm.patchValue({ district: '' });
  }
  onDistrictChange(selectedDistrict: any) {
    this.filteredWards = this.wards.filter(data => data.parent_code == selectedDistrict.target.value);
    this.myForm.patchValue({ wards: '' });
  }
}
