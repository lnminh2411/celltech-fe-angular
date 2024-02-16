import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent {
  constructor() { }
  rows: any[] = [
    { id: 1, name: "Test", age: 10, email: "sdfsdf" }
  ];
  newRowId = 1;

  addRow() {
    console.log(this.rows)
    this.rows.push({ id: this.newRowId++, name: '', age: null, email: '', isEditing: true });
  }

  saveRow(row: any) {
    console.log("Row saved:", row);
    row.isEditing = false;
  }

}
