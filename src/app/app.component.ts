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
    // объявляем переменные
    select:any
    selectedFruit: any;
    modal = false // Делаем изначально модальное окно закрытым

    // Метод который вызывается при клике на элемент меню
    public clickMethod(fruit: any){
        this.selectedFruit = fruit          // Заносим данные выбранного фрукта в переменную
        this.modal = !this.modal      // работа модального окна  
    }   
     
    // Перебираем массив и выводим список названий фруктов
    fruits: Fruit[]=[];
      
    constructor(private httpService: HttpService){}

    ngOnInit(){  
              
        this.httpService.getData().subscribe((data: any) => this.fruits=data["results"]);

    }
}