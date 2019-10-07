import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

  constructor() {
  }

  // Takes a account number  value and returns true on valid number

  checkAccountNumber(accountNumber: string) {
    const nums: Array<number> = accountNumber.split('').map(x => parseInt(x, 10));
    let sum = 0;
	let even = false;
    for (let i = nums.length-1; i >= 0; i--) {
      if (even) {
        nums[i] = nums[i] * 2;
        if (nums[i] > 9) {
          nums[i] = nums[i] - 9;
        }
      } 
      sum = sum + nums[i];
	  even = !even;
    }
		return (sum % 10) == 0;

  }


}
