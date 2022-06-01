import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(public http: HttpClient){ }
      
    getData(){
        return this.http.get('https://pokeapi.co/api/v2/berry/')
    }
}