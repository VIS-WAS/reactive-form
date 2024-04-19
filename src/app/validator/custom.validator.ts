import { AbstractControl, FormControl } from '@angular/forms';

// export const noSpaceAllowed = (control: FormControl) => {
//   if (control.value != null && control.value.indexOf(' ') != -1) {
//     return { spaceExist: true };
//   }
//   return null;
// };

//----------------//above function is implemented as method below//-------------------//
export class CustomValidators {
  static noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { spaceExist: true };
    }
    return null;
  }

  static minLenght(control: FormControl) {
    if (control.value != null && control.value.length < 3) {
      return { lessThanMinimun: true };
    }
    return null;
  }

  static checkUserName(control: AbstractControl): Promise<any> {
    return userNameAllowed(control.value);
  }
}

//---------//replica of user database and check username is exist in DB//-------------//
function userNameAllowed(username: string) {
  const takenUserNames = ['johnsmith', 'manjja', 'vishms', 'vai98'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUserNames.includes(username)) {
        resolve({ checkUserName: true });
      } else {
        resolve(null);
      }
    }, 4000);
  });
}
