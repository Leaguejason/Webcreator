import {Component,ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector:"app-formbox",
  templateUrl:"./formbox.component.html"
})
export class FormboxComponent{
  @ViewChild("f") registerForm!: NgForm;
  onSubmit(){
    console.log(this.registerForm.value);
  }
}
