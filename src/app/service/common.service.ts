import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public backend_url: String = "http://api.fftb.co.uk/";//environment.url
  url: any;
  headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _http: HttpClient) { }

  getBanner(): Observable<Object> {
    return this._http.get(this.backend_url + "get-mainsite-banner");
  }

  getWhyChoose(): Observable<Object> {
    return this._http.get(this.backend_url + "get-mainsite-whychoose");
  }

}
