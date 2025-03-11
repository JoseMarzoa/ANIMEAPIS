import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesApi2Service {

  private urlApi2 = "https://api.jikan.moe/v4/anime?q=%E6%96%B0%E4%B8%96%E7%B4%80&sfw";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi2);
  }
}