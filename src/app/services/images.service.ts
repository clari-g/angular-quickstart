import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
  
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private url = 'https://api.imgur.com/3';
  private headers = new HttpHeaders({
    'Authorization': `Client-ID ${environment.imgurClientId}`
  });
  private requestOptions = { headers: this.headers };
   
  constructor(private httpClient: HttpClient) { }
  
  getAlbumImgs(albumHash: String){
    var url = this.url + '/album/' + albumHash + '/images';
    return this.httpClient.get(url, this.requestOptions);
  }
  
}