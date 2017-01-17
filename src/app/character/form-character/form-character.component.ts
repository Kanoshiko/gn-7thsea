import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Nationality} from '../../shared/entity/nationality';
import {Character} from '../../shared/entity/character';
import {NationalityService} from '../../shared/service/nationality.service';
import {CharacterService} from '../../shared/service/character.service';
import {Observable} from 'rxjs/Rx';
import {Skill} from '../../shared/entity/skill';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  private character = new Character();
  private nationalities: Nationality[] = [];

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private nationalityService: NationalityService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.characterService.loadCharacter(params['id'])
        .subscribe(character => this.character = character);
    });

    this.nationalityService.getNationalities()
      .subscribe(nationalities => this.nationalities = nationalities);
  }

  validate(): void {
    this.characterService.postCharacter(this.character)
      .subscribe();
  }

}
