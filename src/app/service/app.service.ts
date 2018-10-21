import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
   getAllProducts() {
    return this.http.get('http://31.192.57.206:3000/products');
  }
}
