import { FormControl } from '@angular/forms';

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
}
