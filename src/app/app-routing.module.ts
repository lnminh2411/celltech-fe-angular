import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from '@components/create-task/create-task.component';
import { DynamicTableComponent } from '@components/dynamic-table/dynamic-table.component';
import { ReferenceDropdownComponent } from '@components/reference-dropdown/reference-dropdown.component';

const routes: Routes = [
  { path: '', component: CreateTaskComponent },
  { path: 'dynamicTable', component: DynamicTableComponent },
  { path: 'dropdown', component: ReferenceDropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
