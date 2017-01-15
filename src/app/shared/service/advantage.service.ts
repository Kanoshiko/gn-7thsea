import {Injectable} from '@angular/core';
import {Advantage} from '../entity/advantage';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {API_URL, PARAMS_API_URL} from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvantageService {

  constructor(private _http: Http) {
  }

  getAdvantages(): Observable<Advantage[]> {
    return this._http.get(`${API_URL}/advantages${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  postAdvantage(advantage: Advantage) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.post(`${API_URL}/advantages${PARAMS_API_URL}`, JSON.stringify(advantage), {headers});
  }

  putAdvantage(advantage: Advantage) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.put(`${API_URL}/advantages${PARAMS_API_URL}&q={"_id":${advantage._id.$oid}}`, JSON.stringify(advantage), {headers});
  }

  getAdvantage(id: string) {
    return this._http.get(`${API_URL}/advantages/${id}${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteAdvantage(id: string) {
    return this._http.delete(`${API_URL}/advantages/${id}${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }
}
