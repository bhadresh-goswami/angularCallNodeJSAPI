import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) {
    
  }
  endPoint = "http://localhost:3000/";

  getDetails():Observable<any> {
    return this.http.get(this.endPoint + "getdetails");
  }
}
