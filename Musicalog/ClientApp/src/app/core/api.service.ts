import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Album } from '../album';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: HttpClient;
 baseUrl: string;
public albums: Album[];
  constructor(_http: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.http = _http;
    this.baseUrl = _baseUrl;
    console.log('_baseUrl:' + _baseUrl);
  }
  getAlbums(path: string): Observable<any> {
    return  this.http.get(this.baseUrl + path);
  }
  getAlbumDetails(path: string): Observable<any> {
    return  this.http.get(this.baseUrl + path);
  }
  getPageSize(path: string): Observable<any> {
    return  this.http.get(this.baseUrl + path);
  }
  updateAlbumDetails(path: string, album: Album) {
    return this.http.post<Album>(this.baseUrl + path, album);
  }

  public addAlbum(path: string, album: Album) {
    return this.http.post<Album>(this.baseUrl + path, album);
  }

  public remove(path: string, id: number) {
    return this.http.delete(this.baseUrl + path + '/' + id);
  }

}
