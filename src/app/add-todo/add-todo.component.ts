import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Todo } from '../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter();
   title:string
   desc:string
   todoForm: FormGroup;
  constructor( private fb: FormBuilder,private addService:TodoItemComponent) { }

  ngOnInit(): void {
    this.todoForm =this.fb.group({
      'title': new FormControl(null, [Validators.required]),
      'desc': new FormControl(null, [Validators.required]),
      
    })
  }
   onSubmit(){
    if(this.todoForm.valid){
      console.log(this.todoForm.value);
      const todo={
        Sno:1,
        title:this.title,
        desc:this.desc,
        active:true
      }
      console.log(todo);
      
      this.todoAdd.emit(todo);
     
        this.todoForm.reset();
    
        
  
        
    }else{
      let key = Object.keys(this.todoForm.controls);
      key.filter(data =>{
        let control = this.todoForm.controls[data];
        if(control.errors !=null){
          control.markAsTouched();
        }
      })
    }

   }
}
