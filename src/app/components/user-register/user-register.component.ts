import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerForm!: FormGroup;

  errorMessage = 'Invalid';

  constructor(
    private authService: AuthService,
  ) {

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, 
        Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });

  }

  onSubmit(): void {
    if(this.registerForm.valid){
      const { email, password } = this.registerForm.value;

      this.authService.register(email as string, password as string).subscribe({
        next: data => {
          console.log(data);
          this.registerForm.reset();
          alert("Your registration successfull!")
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
    }else{
      alert("Please enter valid data!")
    }
  }
}