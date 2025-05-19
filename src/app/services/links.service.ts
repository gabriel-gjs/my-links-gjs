import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) {}

  getJsonData(): Observable<any> {
    return this.http.get('/assets/data/link.json');
  }
}
