import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus: any;
  model: any = {};
  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    this.getMenus();
  }

  private getMenus() {

    this._commonService.getRequest('Test/DatafromDB')
    .subscribe((respose:any)=>{
      this.menus=respose;
    },(error)=>{
      console.log(error);
    });
   /*
    this._http.get('http://localhost:5000/api/Test/DatafromDB').subscribe(
      (responseData) => {
        // console.log(responseData);
        this.menus = responseData;
      },
      (error) => {
        console.log(error);
      }
    );
  */

  }
  login() {
    alert(this.model.username + " " + this.model.password);

  }
}
