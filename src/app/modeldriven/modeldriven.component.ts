import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css'],
})
export class ModeldrivenComponent implements OnInit {
  constructor() {}

  signUpForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.signUpForm.value);
  }
}
