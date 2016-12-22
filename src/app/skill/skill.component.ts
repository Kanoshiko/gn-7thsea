import { Component, OnInit } from '@angular/core';
import { SkillService } from './skill.service';
import { Skill } from './skill';
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
