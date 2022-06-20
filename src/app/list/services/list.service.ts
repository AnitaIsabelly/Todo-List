import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  task = "";
  GerarTodoList():string[]{
    return ['']
  }
  constructor() { }
}

