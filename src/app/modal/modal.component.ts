import { Component,EventEmitter, Input, Output, OnInit } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title='Информация о продукте'
  @Output() close = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  // setCapital() {
  //   const berry = {
  //     name: 
  //   }
  // }

}
