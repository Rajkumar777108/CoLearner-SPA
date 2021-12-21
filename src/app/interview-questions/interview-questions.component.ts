import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {
  techs : any;
  constructor( private _commonService : CommonService) { }

  ngOnInit(): void {
    this.getTechnology();
  }
  private getTechnology()
  {
    this._commonService.getRequest("Technology/GetTechnologies").subscribe((responseData: any)=>{
      this.techs=responseData;
    },(error)=>{
      console.log(error);
    });
  }


}
