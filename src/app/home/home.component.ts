import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idChar = '';

  title = '7th Sea - Générateur de personnage';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  loadCharacter() {
    this.router.navigateByUrl(`/character/${this.idChar}/edit`).then();
  }
}
