import { Injectable } from '@angular/core';
import { Skill } from './Skill';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {API_URL, PARAMS_API_URL} from '../shared/config'

@Injectable()
export class SkillService {
  private _skills: Skill[];

  constructor(private _http: Http) { }

  getSkills(): Observable<Skill[]> {
    if (this._skills) {
      return Observable.of(this._skills);
    }
    return this._http.get(`${API_URL}/skills${PARAMS_API_URL}`)
      .map((response: Response) => {
        this._skills = response.json();
        return this._skills;
      });
  }

  postSkill(skill: Skill) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.post(`${API_URL}/skills${PARAMS_API_URL}`, JSON.stringify(skill), { headers })
      .map((response: Response) => this._skills.push(response.json()));
  }

  putSkill(skill: Skill) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.put(`${API_URL}/skills${PARAMS_API_URL}&q={"_id":${skill._id.$oid}}`, JSON.stringify(skill), { headers })
      .map((response: Response) => this._skills.push(response.json()));
  }

  getSkill(id: string) {
    if (!this._skills) {
      return this._skills.filer(skill => skill._id.$oid === id)[0];
    }

    
  }
}
