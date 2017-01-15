import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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
  private nationalities: Observable<Nationality[]>;

  constructor(private route: ActivatedRoute,
              private characterService: CharacterService,
              private nationalityService: NationalityService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if (!id) {
        this.character = this.characterService.newCharacter();
      } else {
        this.character = this.characterService.newCharacter(id);
      }
    });

    this.nationalities = this.nationalityService.getNationalities();
  }

  validate(): void {
    this.characterService.postCharacter(this.character)
      .subscribe();
  }

}
