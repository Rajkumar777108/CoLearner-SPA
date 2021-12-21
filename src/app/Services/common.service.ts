import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _respons:any;
  baseUrl:string="http://localhost:5000/api/";
  constructor(private _http : HttpClient) { }
  getRequest(requestURL)
  {
    return this._http.get(this.baseUrl+ requestURL);
  }
}
