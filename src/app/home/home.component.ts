import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('firstname') firstname:any;
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  backToRegister(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
