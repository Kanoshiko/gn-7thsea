import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skill } from '../skill'
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {
  private _skill;
  
  constructor(
    private route: ActivatedRoute,
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id']; // (+) converts string 'id' to a number
      if(!id) {
        this._skill = new Skill();
      } else {
        this.skillService.getSkill(id).then(skill => this._skill = skill);
      }
    });
  }

  validate(): void {
    this.skillService.postSkill(this._skill)
     .subscribe(() => this.router.navigate(['/skills']));
  }

}
