import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AdvantageService } from '../../shared/service/advantage.service';

@Component({
  selector: 'app-delete-advantage',
  templateUrl: './delete-advantage.component.html',
  styleUrls: ['./delete-advantage.component.css']
})
export class DeleteAdvantageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private advantageService: AdvantageService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.advantageService.deleteAdvantage(params['id'])
        .subscribe(() => this.router.navigate(['/advantages']));
    });
  }
}
