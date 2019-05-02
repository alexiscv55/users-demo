import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private api = 'https://my-json-server.typicode.com/alexiscv55/users-mock/users';

  constructor(private httpClient: HttpClient) { }

    public getUsers(): Observable<Array<User>> {
      return this.httpClient.get<Array<User>>(this.api);
    }

    public getUserById(id: number): Observable<User> {
      return this.httpClient.get<User>(`${this.api}/${id}`);
    }

    public createUser(user: User): Observable<User> {
      return this.httpClient.post<User>(this.api, user);
    }

    public updateUser(id: number, user: User): Observable<User> {
      return this.httpClient.put<User>(`${this.api}/${id}`, user);
    }

    public deleteUser(id: number): Observable<any> {
      return this.httpClient.delete<any>(`${this.api}/${id}`);
    }
}
