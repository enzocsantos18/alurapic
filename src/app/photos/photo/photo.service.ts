import { Photo } from './photo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) {}

  listFromUser(username: string){
    return this.http
      .get<Photo[]>(API + `/${username}/photos`);
  }

  listFromUserPaginated(username: string, page: number){

    const params = new HttpParams().append('page', page.toString());

    return this.http
      .get<Photo[]>(API + `/${username}/photos`, {
        params
      });
  }
}
