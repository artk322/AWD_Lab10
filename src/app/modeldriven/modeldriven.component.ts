import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css'],
})
export class ModeldrivenComponent implements OnInit {
  constructor() {}

  signUpForm = new FormGroup({
    firstname: new FormControl('Test', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.signUpForm.controls.firstname.valid);
  }
}
