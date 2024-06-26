import { Injectable } from '@angular/core';
import { Destination } from '../models/destination';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { DetachedRouteHandle } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  constructor(private http: HttpClient) { }

  getAllDestinations() : Observable<Destination[]> {
    return this.http.get<Destination[]>(`${environment.apiUrl}destinations`);
  }

  addDestination({id, ...destination}: Destination): Observable<Destination> {
    return this.http.post<Destination>(`${environment.apiUrl}destinations`, destination);
  } 

  deleteDestination(id: number): Observable<Destination> {
    return this.http.delete<Destination>(`${environment.apiUrl}destinations/${id}`);
  }

}
