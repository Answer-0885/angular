import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Berry{
  growth_time:number
  id:number
  max_harvest:number
  name:string
  size:number
  smoothness:number
} 
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  // Принимаем переменную с данными выбранного фрукта
  @Input() public fruit: any;

  // Закрытие модального окна
  @Output() close = new EventEmitter()

  // Метод который вызывается при нажатии на кнопку "выбрать"
  public change() {
    this.onChanged.emit();
  }
  // Отправляем метод в родительский компонент для связки
  @Output() onChanged = new EventEmitter();

    // Перебираем массив и выводим список характеристик выбранного фрукта в модальное окно
  berrys: Berry[]=[];
    
  constructor(private http: HttpClient){}
  
  ngOnInit(){   
    // Так как мы перебираем объект, который получаем через url, то нам необходимо привести данные в виде массива.Для этого используем метод Array().
        this.http.get(this.fruit.url).subscribe((res:any)=>{this.berrys = Array(res);});       
  }
}         

