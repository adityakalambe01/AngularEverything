import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("init Called");
  }
  title = 'lifecyclehooks';
  constructor(){
    console.log("Constructor Called");
  }
}

let a1 = new AppComponent();
let a2 = new AppComponent();
