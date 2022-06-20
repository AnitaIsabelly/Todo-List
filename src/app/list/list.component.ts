import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ListService} from './services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public items: string[] = [];
  public task = "";

  constructor(private servico:ListService) {
    this.items = servico.GerarTodoList();
   }

   addTask(){
     this.items.push(this.task);
     this.task="";
  
   }

   removeTask(item: string){
     this.items.splice(this.items.indexOf(item), 1);
   }

  ngOnInit(){
  }

}
