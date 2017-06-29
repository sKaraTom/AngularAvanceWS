import { Component, OnInit } from '@angular/core';
import { Todos } from "app/objets-metiers/todos";
import { TodosService } from "app/services/todos.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  listeTodos:Todos[];

  constructor(private todosService:TodosService) {
      this.listeTodos = [];
   }

  ngOnInit() {
    this.obtenirTodos(); 

  }

  private obtenirTodos():void {

    this.todosService.obtenirTodos()
                    .subscribe(res => this.listeTodos = res,
                    err => console.log(err),
                    () => console.dir(this.listeTodos));

  }

  private creerTodos() {

    let todosTest:Todos = new Todos();
    todosTest.userId = 22222;
    todosTest.id = 2222222222;
    todosTest.title = "le titre";
    todosTest.completed = true;

    this.todosService.creerTodos(todosTest)
                .subscribe(res => console.log("succès",res),
                            err => console.log(err));
  }



}
