import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceRegister } from '../../services/service-register';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  userRegisterForm : FormGroup;

  constructor(private regServ: ServiceRegister ) {
    this.userRegisterForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        city: new FormControl(''),
        street: new FormControl('')
      }),
      PhoneNums: new FormArray([new FormControl('',Validators.pattern('^[0-9]{10}$'))])
    })
  }

  onSubmit() {
    if (this.userRegisterForm.valid) {
      this.regServ.registerUser(this.userRegisterForm.value).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
        },
        error: (error) => {
          console.error('Error registering user:', error);
        }
      });
    }
  }

  get phones() {
    return this.userRegisterForm.get('PhoneNums') as FormArray;
  }

  addPhoneNumber() {
    if (this.phones.length <= 5) {
      this.phones.push(new FormControl('', Validators.pattern('^[0-9]{10}$')));
    }
  }

  remove (index:number) {
    this.phones.removeAt(index);
  }
}
