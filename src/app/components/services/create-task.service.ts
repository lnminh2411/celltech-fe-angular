import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DynamicForm } from '@shared/custom-input-controls/dynamic/form/form.model';
import { RequestType } from '@shared/services/hub.type';
import { DynamicData, Value } from '@shared/services/hub.model';

@Injectable({
  providedIn: 'root',
})
export class CreateTaskService {
  private dataUrl = '../../../assets/dynamicForm.json';
  private sessionId: string | undefined;
  constructor(private httpClient: HttpClient) { }
  public getData(): Observable<any> {
    return this.httpClient.get<any>(this.dataUrl);
  }

  public create(
    data: DynamicForm,
    requestType?: RequestType,
    recordId?: string
  ) {
    const convertData = {} as DynamicData;
    convertData.request = requestType;
    convertData.actionId = data.actionId;
    convertData.tableId = data.tableId;
    convertData.sessionId = this.sessionId;
    convertData.formId = data.formId;

    const dt = [] as Value[];
    Object.keys(data.data).forEach((key) => {
      dt.push({
        name: key,
        value: (data.data[key]),
      });
    });
    convertData.data = dt;

    if (recordId) {
      const index = convertData.data.findIndex((item) => item.name === 'ID');
      if (index >= 0) {
        convertData.data[index].value = recordId;
      } else {
        convertData.data.push({
          name: 'ID',
          value: recordId,
        });
      }
    } else {
      convertData.data.push({
        name: 'ID',
        value: '',
      });
    }
    return convertData;
  }

}
