import {Injectable} from '@angular/core';
import {Skill} from '../entity/skill';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {API_URL, PARAMS_API_URL} from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {

  constructor(private _http: Http) {
  }

  getSkills(): Observable<Skill[]> {
    return this._http.get(`${API_URL}/skills${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  postSkill(skill: Skill) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.post(`${API_URL}/skills${PARAMS_API_URL}`, JSON.stringify(skill), {headers});
  }

  putSkill(skill: Skill) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.put(`${API_URL}/skills${PARAMS_API_URL}&q={"_id":${skill._id.$oid}}`, JSON.stringify(skill), {headers});
  }

  getSkill(id: string) {
    return this._http.get(`${API_URL}/skills/${id}${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteSkill(id: string) {
    return this._http.delete(`${API_URL}/skills/${id}${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }
}
