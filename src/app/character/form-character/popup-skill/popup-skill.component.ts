import {Component, OnInit} from '@angular/core';
import {Skill} from '../../../shared/entity/skill';
import {Character} from '../../../shared/entity/character';
import {SkillService} from '../../../shared/service/skill.service';
import {CharacterService} from '../../../shared/service/character.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-popup-skill',
  templateUrl: './popup-skill.component.html',
  styleUrls: ['./popup-skill.component.css']
})
export class PopupSkillComponent implements OnInit {
  private skills: Skill[] = [];
  private character = new Character();

  constructor(
    private skillService: SkillService,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.characterService.loadCharacter().subscribe(character => this.character = character);
    this.skillService.getSkills().subscribe(skills => this.skills = skills);
  }
}
