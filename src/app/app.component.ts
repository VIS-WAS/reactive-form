import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';

  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      street: new FormControl(null),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
    });
  }
  formSubmitted() {
    console.log(this.reactiveForm);
  }
}
