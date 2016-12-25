import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/entity/skill'
import { SkillService } from '../shared/service/skill.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  title = '7th Sea - Compétences';
  skills: Observable<Skill[]>;

  constructor(private skillService: SkillService) { }
  
  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}
