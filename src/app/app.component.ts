import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomValidators } from './validator/custom.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-forms';

  reactiveForm: FormGroup;

  formStatus: string = '';

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
        CustomValidators.minLenght,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl('vishwas.2@gmail.com', [
        Validators.email,
        Validators.required,
      ]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl('JP Nagar', Validators.required),
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(564387, Validators.required),
      }),
      skills: new FormArray([new FormControl('Cricket', Validators.required)]),
      experience: new FormArray([]),
    });

    //--------//valueChanges() on formControl//----------//

    // this.reactiveForm.get('firstname').valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    //--------//valueChanges() on formControl//----------//

    //--------//valueChanges() on formGroup//----------//

    // this.reactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    //--------//valueChanges() on formGroup//----------//

    //--------//statusChanges() on formControl//----------//

    // this.reactiveForm.get('username').statusChanges.subscribe((value) => {
    //   console.log(value);
    // });

    //--------//tatusChanges() on formControl//----------//

    //--------//statusChanges() on formGroup//----------//

    this.reactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formStatus = status;
    });

    //--------//tatusChanges() on formGroup//----------//
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
  addExperience() {
    const formGroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroup);
  }

  deleteExperience(index: number) {
    const group = <FormArray>this.reactiveForm.get('experience');
    group.removeAt(index);
  }
}
