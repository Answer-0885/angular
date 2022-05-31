import {Component, OnInit} from '@angular/core';




@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
    // interpolation: ['[[',']]']
})
export class CardComponent implements OnInit{
    
   // @Input() card: Card

    title = 'My Card Title'
    text = 'My TEXT'
    textColor = 'blue'
    disabled = false
    number = '36'
    array = [1,1,2,3,5,8,13]
    obj = {name:'Vitaly', info: {age: '36',work: 'frontend'}}
    getInfo():string {
        return 'This is my info'
    }
    imgUrl:string = 'https://covers.openlibrary.org/b/id/5775245-M.jpg'
    ngOnInit() {
        setTimeout( ()=> {
            this.imgUrl = 'https://img4.goodfon.ru/original/320x240/2/79/frukty-granat-apelsin-khurma-pittakhaiia.jpg'
            this.disabled = true
        }, 3000)
    }
    changeTitle(){
        this.title = "Title has been changed"
    }
    // inputHandler(value:any){
    //    // const value = event.target.value
    //     this.title = value
    // }
    changeHandler(){

    }
}
