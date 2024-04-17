import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
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
      firstname: new FormControl('Vishwas', Validators.required),
      lastname: new FormControl('MS', Validators.required),
      email: new FormControl('vishwas.2@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([new FormControl(null, Validators.required)]),
    });
  }
  formSubmitted() {
    console.log(this.reactiveForm);
  }
  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }
  deleteSkill(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
}
