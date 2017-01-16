import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Nationality} from '../../shared/entity/nationality';
import {NationalityService} from '../../shared/service/nationality.service';
import {CharacterService} from '../../shared/service/character.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  private character;
  private nationalities: Nationality[];

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private nationalityService: NationalityService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.character = this.characterService.loadCharacter(params['id'])
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
