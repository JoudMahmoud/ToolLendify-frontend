import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  url: string;
  constructor(private httpClient:HttpClient) {
    this.url = environment.apiUrl;
  }

  getUserInfo(userId: string) {
    
  }
}
