import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Character } from '../../shared/entity/character';
import { Nationality } from '../../shared/entity/nationality';
import { Skill } from '../../shared/entity/skill';
import { SkillService } from '../../shared/service/skill.service';
import { NationalityService } from '../../shared/service/nationality.service';
import { CharacterService } from '../../shared/service/character.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  private character;
  private nationalities: Observable<Nationality[]>;
  private skills: Observable<Skill[]>;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private skillService: SkillService,
    private nationalityService: NationalityService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if(!id) {
        this.character = new Character();
      } else {
        this.character = this.characterService.getCharacter(id);
      }
    });

    this.skills = this.skillService.getSkills();
    this.nationalities = this.nationalityService.getNationalities();
  }

  validate(): void {
    this.characterService.postCharacter(this.character)
     .subscribe();
  }

}