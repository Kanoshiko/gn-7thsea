import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/entity/skill';
import { Character } from '../../../shared/entity/character';
import { SkillService } from '../../../shared/service/skill.service';
import { CharacterService } from '../../../shared/service/character.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-popup-skill',
  templateUrl: './popup-skill.component.html',
  styleUrls: ['./popup-skill.component.css']
})
export class PopupSkillComponent implements OnInit {
  private skills: Observable<Skill[]>;
  private character: Character;

  constructor(
    private skillService: SkillService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.character = this.characterService.newCharacter();
    this.skills = this.skillService.getSkills();
  }

}
