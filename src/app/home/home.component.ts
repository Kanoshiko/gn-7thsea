import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CharacterService} from '../shared/service/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  idChar = '';

  title = '7th Sea - Générateur de personnage';

  constructor(private router: Router,
              private characterService: CharacterService) {
  }

  ngOnInit() {
  }

  loadCharacter() {
    this.characterService.loadCharacter(this.idChar);
    this.router.navigateByUrl(`/character/${this.idChar}/edit`);
  }
}
