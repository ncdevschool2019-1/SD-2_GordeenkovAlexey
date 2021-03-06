import {Injectable} from '@angular/core';


import {Observable, of} from 'rxjs';

import {HttpClient} from "@angular/common/http";
import {Service} from "../modules/account/models/service";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getCatalog(type: string): Observable<Service[]> {
    return this.http.get<Service[]>('http://localhost:8081/api/catalog/type/' + type);
  }

  getPage(type: string, page: number, elementsPerPage: number): Observable<any> {
    return this.http.get<Service[]>('http://localhost:8081/api/catalog?type=' + type + '&page=' + page + '&elementsPerPage=' + elementsPerPage);
  }

  getNumberOfPages(type: string): Observable<number> {
    return this.http.get<number>('http://localhost:8081/api/catalog/pages/' + type);
  }

  constructor(private http: HttpClient) {
  }
}
