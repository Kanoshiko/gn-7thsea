import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skill } from '../skill'
import { SkillService } from '../skill.service';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {
  private skill;
  
  constructor(
    private route: ActivatedRoute,
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      if(!id) {
        this.skill = new Skill();
      } else {
        this.skill = this.skillService.getSkill(id);
      }
    });
  }

  validate(): void {
    this.skillService.postSkill(this.skill)
     .subscribe(() => this.router.navigate(['/skills']));
  }

}
