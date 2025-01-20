import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Tool } from '../../_models/tool';
import { UserAuthService } from '../auth/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ToolService {
  url: string = environment.apiUrl;
  constructor(private httpClient: HttpClient, private authService:UserAuthService) {}

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

  addTool(tool: any) {
    console.log("ll");
    
    return this.httpClient.post<Tool>(`${this.url}/api/tool`, tool, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.authService.getToken()}`
      })
    }).pipe(
      map(response => {
        console.log('Tool added successfully in service:', response);
        return response;
      }), catchError(err => {
        console.error('Error adding tool in service:', err);
        return throwError(() => new Error('Failed to add tool.'));
      })
    )
 }

}
