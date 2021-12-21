import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  menus: any;
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient ) { }

  ngOnInit(): void {
    this.getMenus();
  }
  // tslint:disable-next-line: typedef
  private getMenus()
  {
    this._http.get('http://localhost:5000/api/Test/DatafromDB').subscribe(
      responseData => {
      // console.log(responseData);
      this.menus = responseData;
      } , error => {
        console.log(error);
      });
  }

}
