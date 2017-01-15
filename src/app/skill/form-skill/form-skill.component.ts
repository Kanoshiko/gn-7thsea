import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Skill} from '../../shared/entity/skill'
import {SkillService} from '../../shared/service/skill.service';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {
  private skill: Skill;

  constructor(private route: ActivatedRoute,
              private skillService: SkillService,
              private router: Router) {
  }

  ngOnInit() {
    this.skill = new Skill();

    this.route.params.subscribe((params: Params) => {
      this.skillService.getSkill(params['id'])
        .subscribe(skill => this.skill = skill);
    });
  }

  validate(): void {
    this.skillService.postSkill(this.skill)
      .subscribe(() => this.router.navigate(['/skills']));
  }

}
