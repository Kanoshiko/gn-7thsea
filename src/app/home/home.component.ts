import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title = '7th Sea - Générateur de personnage';

  constructor() { }

  ngOnInit() {
  }

}
