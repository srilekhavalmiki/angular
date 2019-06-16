import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1> welcome {{name}} </h1>
  <h2>{{2+2}}</h2>
  <h2>{{"welcomes"+name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  `,
  styles: [`
  div
  {
    color :red ;
  }
  `]
})
export class TestComponent implements OnInit {
  public name ="sri"; 
  constructor() { }

  ngOnInit() {
  }

}
