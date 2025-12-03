import { AbstractControl } from '@angular/forms';

// return true if the word is found in provided string
export function avoidWord(control: AbstractControl) {
  // when word "bug" is found, return {avoidWord: true}
  if (control.value && control.value.includes('bug')) {
    return { avoidWord: true };
  }
  // when word "bug" NOT found, return null
  return null;
}
