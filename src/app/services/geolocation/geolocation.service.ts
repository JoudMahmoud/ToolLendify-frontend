import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private nominatimUrl = 'https://nominatim.openstreetmap.org/search';
  constructor(private httpClient: HttpClient) { }
  getGeoLocation(address: string): Observable<any>{
    const params = {
      q: address,
      format: 'json',
      addressdetails: '1',
      limit: '1'
    };
    return this.httpClient.get<any[]>(this.nominatimUrl, { params }).pipe(
      catchError((err) => {
        console.error('Error fetching geolocation: ', err);
        return [];
      })
    );
  }
}
