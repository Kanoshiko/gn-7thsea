import {Injectable} from '@angular/core';
import {Nationality} from '../entity/nationality';
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NationalityService {

  constructor(private _http: Http) {
  }

  getNationalities(): Observable<Nationality[]> {
    return this._http.get(`/app/shared/data/nationalities.json`)
      .map((response: Response) => {
        return response.json();
      });
  }

}
