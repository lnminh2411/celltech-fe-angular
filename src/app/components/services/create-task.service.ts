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
  private sessionId: string | undefined;
  constructor(private httpClient: HttpClient) { }

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
        value: this.generateGUID(),
      });
    }
    console.log(convertData)
    return convertData;
  }
  generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  public getDataFromJson(jsonUrl: string): Observable<any> {
    return this.httpClient.get<any>(jsonUrl);
  }
  public bai1(data: any) {
    const componentItem: any = {}
    componentItem.Id = this.generateGUID();
    componentItem.Name = data.data.name;
    componentItem.Description = data.data.description;
    componentItem.InitParams = [];

    const containerSettings: any = {}
    containerSettings.Table = null;
    containerSettings.TableId = null;
    containerSettings.componentType = "LAYOUT";
    containerSettings.FilterId = null;
    containerSettings.ComponentItem = componentItem;

    const returnData: any = {}
    returnData.MenuType = "Container";
    returnData.DisplayPlace = null;
    returnData.InitParams = [];
    returnData.MapData = null;
    returnData.ContainerSettings = containerSettings;
    returnData.ActionSteps = null;

    return returnData;
  }
}