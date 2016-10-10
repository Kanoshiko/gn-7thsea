import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';
import { Skill } from './skill';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  title = '7th Sea - Compétences';
  private _skills: Skill[];

  constructor(private skillService: SkillService) { }
  
  ngOnInit() {
    this.skillService.getSkills().subscribe((skills: Skill[]) => this._skills = skills);
  }

  get skills(): Skill[] {
    return this._skills;
  }

}
