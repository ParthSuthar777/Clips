import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  moNumFormat:string = "(000)000-0000";
 
  constructor(private toastr: ToastrService) {}

  resgisterGroup = new FormGroup({
    name : new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    email : new FormControl('',
      [
        Validators.required,Validators.email
      ]
    ),
    age : new FormControl('',
      [
        Validators.required,Validators.min(18),Validators.max(100)
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$")
      ]
    ),    
    confirm_password : new FormControl('',
      [
        Validators.required
      ]
    ),
    phoneNumber : new FormControl('',
      [
        Validators.required
      ]
    )
  })

  registerUser() 
  {
    this.toastr.success('User Registered successfully!', 'Success');
  }
    
}
