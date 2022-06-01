import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import { Fruit } from './fruit';
   
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
   
    
    modal = false
 

    fruits: Fruit[]=[];
    
     
    constructor(private httpService: HttpService){}
      
    ngOnInit(){
        this.httpService.getData().subscribe((data: any) => this.fruits=data["results"]);
        
    }
}