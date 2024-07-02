import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PackingListItem } from '../models/packing-list-item';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PackingListItemService {

  constructor(private http: HttpClient) { }

  getAllPackingListItems() : Observable<PackingListItem[]> {
    return this.http.get<PackingListItem[]>(`${environment.apiUrl}packing-list-items`);
  }

  getById(id: number) : Observable<PackingListItem> {
    return this.http.get<PackingListItem>(`${environment.apiUrl}packing-list-items/${id}`);
  }

  addPackingListItem(item: string): Observable<PackingListItem> {
    return this.http.post<PackingListItem>(`${environment.apiUrl}packing-list-items`, {item});
  } 

  deletePackingListItem(id: number): Observable<PackingListItem> {
    return this.http.delete<PackingListItem>(`${environment.apiUrl}packing-list-items/${id}`);
  }

  getByItem(item: string): Observable<PackingListItem[]> {
    return this.http.get<PackingListItem[]>(`${environment.apiUrl}packing-list-items?item=${item}`);
  }
}
