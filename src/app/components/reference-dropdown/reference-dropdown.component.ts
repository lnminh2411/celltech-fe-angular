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
    this.city.getDataFromJson("../../../assets/treeData.json").subscribe((response) => {
      this.treeList = this.convertListToTree(response);
      console.log(this.treeList)
    });
  }
  treeList: any[] = [];
  provinces: any[] = [];
  districts: any[] = [];
  wards: any[] = [];
  filteredDistricts: any[] = [];
  filteredWards: any[] = [];
  myForm: FormGroup;
  mapOfExpandedData: { [key: string]: any[] } = {};
  onProvinceChange(selectedProvince: any) {
    this.filteredDistricts = this.districts.filter(data => data.parent_code == selectedProvince.target.value);
    this.myForm.patchValue({ district: '' });
  }
  onDistrictChange(selectedDistrict: any) {
    this.filteredWards = this.wards.filter(data => data.parent_code == selectedDistrict.target.value);
    this.myForm.patchValue({ wards: '' });
  }
  convertListToTree(list: any[]) {
    const roots = [];
    const map: any = {};
    let node = null;

    for (let i = 0; i < list.length; i++) {
      map[list[i].ID] = i;
      list[i].CHILDREN = [];
    }
    //debugger; //eslint-disable-line
    for (let i = 0; i < list.length; i++) {
      node = list[i];
      if (list[map[node.PARENT]]) {
        list[map[node.PARENT]].CHILDREN.push(node)
      }
      else {
        roots.push(node);
      }
    }
    return roots;
  }
  collapse(array: any[], data: any, $event: boolean): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach((d: any) => {
          const target = array.find(a => a.ID === d.ID)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: any): any[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.CHILDREN) {
        for (let i = node.CHILDREN.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: any, hashMap: { [key: string]: boolean }, array: any[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

}
