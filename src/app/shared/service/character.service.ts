import { Injectable } from '@angular/core';
import { Character } from '../entity/character';
import { Http, Response, Headers } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import {API_URL, PARAMS_API_URL} from '../config';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
  private characterSubject = new BehaviorSubject<Character>(new Character());

  constructor(private _http: Http) {
  }

  loadCharacter(id?: string): Observable<Character> {
    if (id) {
      this.getCharacter(id).subscribe(this.characterSubject);
    }

    return this.characterSubject;
  }

  getAllCharacters(): Observable<Character[]> {
    return this._http.get(`${API_URL}/characters${PARAMS_API_URL}`)
      .map((response: Response) => {
        return response.json();
      });
  }

  postCharacter(character: Character) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.post(`${API_URL}/characters${PARAMS_API_URL}`, JSON.stringify(character), { headers });
  }

  putCharacter(character: Character) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    return this._http.put(`${API_URL}/characters${PARAMS_API_URL}&q={"_id":${character._id.$oid}}`, JSON.stringify(character), { headers });
  }

  getCharacter(id: string): Observable<Character> {
    return this._http.get(`${API_URL}/characters/${id}${PARAMS_API_URL}`)
      .map((response: Response) => {
        let newCharacter = new Character();
        Object.assign(newCharacter,response.json());
        return newCharacter;
      });
  }
}
