import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiURL = 'http://localhost:8000/api';

function apiID(id: any) {
  return `${apiURL}/${id}`;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor( private http: HttpClient ) { }

  // methods matching apis 

  public getAllOptions(): Observable<any> {
    return this.http.get(apiURL);
  }

  public create(data: any): Observable<User> {
    return this.http.post(apiURL, data);
  }

  public deleteAll(): Observable<User[]> {
    return this.http.delete<User[]>(apiURL);
  }

  public delete(id: any): Observable<User> {
    return this.http.delete(apiID(id));
  }

}
