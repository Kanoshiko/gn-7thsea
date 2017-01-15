import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Advantage } from '../../shared/entity/advantage'
import { AdvantageService } from '../../shared/service/advantage.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-form-advantage',
  templateUrl: './form-advantage.component.html',
  styleUrls: ['./form-advantage.component.css']
})
export class FormAdvantageComponent implements OnInit {
  private advantage: Advantage;

  constructor(
    private route: ActivatedRoute,
    private advantageService: AdvantageService,
    private router: Router) { }

  ngOnInit() {
    this.advantage = new Advantage();

    this.route.params.subscribe((params: Params) => {
      this.advantageService.getAdvantage(params['id'])
        .subscribe(advantage => this.advantage = advantage);
    });
  }

  validate(): void {
    this.advantageService.postAdvantage(this.advantage)
      .subscribe(() => this.router.navigate(['/advantages']));
  }

}
