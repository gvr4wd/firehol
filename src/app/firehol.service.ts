import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FireholService {

  constructor(private http: Http) { }

  getAllIps () {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://iplists.firehol.org/all-ipsets.json').
      map(resp => resp.json());
  }
}
