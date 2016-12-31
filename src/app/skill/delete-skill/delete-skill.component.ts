import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Skill } from '../../shared/entity/skill'
import { SkillService } from '../../shared/service/skill.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrls: ['./delete-skill.component.css']
})
export class DeleteSkillComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.skillService.deleteSkill(params['id'])
        .subscribe(() => this.router.navigate(['/skills']));
    });
  }
}
