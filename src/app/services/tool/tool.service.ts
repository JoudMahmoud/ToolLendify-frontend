import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Tool } from '../../_models/tool';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  url: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getAllTools(): Observable<Tool[]> {
    return this.httpClient.get<Tool[]>(`${this.url}/api/tool`);
  }

  getAvaliableTools() {
    return this.httpClient.get<Tool[]>(`${this.url}/api/tool/availableTools`);
  }

  getToolByName(ToolName: string) {
    return this.httpClient.get<Tool[]>(
      `${this.url}/api/tool/get-by-name/${ToolName}`
    );
  }

 // addTool()

}
