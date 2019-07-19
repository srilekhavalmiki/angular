import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  data:any;
  question:any;
  op1:any;
  op2:any;
  op3:any;
  i:number=0;
  display:boolean=true;
  option:any;
  answers:Array<number>=[];
  constructor(private http:HttpClient) { }
  selectedvalue (event: any) {
    this.option = event.target.value;
  }
  nextques()
  {
    this.answers[this.i]=this.option;
    console.log(this.answers);
    this.option=null;
    this.i+=1;
    if(this.i!=this.data.length)
    {
      this.question=this.data[this.i].ques;
      this.op1=this.data[this.i].op1;
      this.op2=this.data[this.i].op2;
      this.op3=this.data[this.i].op3;
    }
    else
    {
      this.question=null;
      this.i=null;
      this.display=false;
    }
  }
  ngOnInit() {
    this.http.get("assets/questions.json").subscribe((ques)=>{
          this.data=ques;
          console.log(this.data);
          this.question=ques[0].ques;
          this.op1=ques[0].op1;
          this.op2=ques[0].op2;
          this.op3=ques[0].op3;
    });
  }
 
}
