import { Component } from '@angular/core';
import {UserCredentials, UserModel, UserRoleModel} from "@shared/modules/models/user.model";
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../../../services/auth.service";
import {Observable, switchMap, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  user: UserModel = <UserModel>{};
  submitted = false;

  signUpForm = this.formBuilder.group({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
    password: this.formBuilder.control('', Validators.required),
    role: this.formBuilder.control<UserRoleModel>(UserRoleModel.EMPLOYEE, Validators.required)
  });

  constructor(private authService: AuthService,
              private formBuilder: NonNullableFormBuilder,
              private router: Router
  ) {}

  onSubmit() {
    if (this.signUpForm.valid) {
      this.user = {
        ...this.signUpForm.getRawValue()
      }
      this.submitted = true;
      this.signUp();
    }
  }

  signUp() {
    this.authService.signUp(this.user).pipe(
        switchMap(() => this.authService.signIn(this.user.email, this.user.password!)),
        tap((res: UserCredentials) => {
          localStorage.setItem('jwtToken', res.token);
        })
    ).subscribe({
      next: () => this.signIn()
    });
  }

  signIn() {
    this.authService.signIn(
        this.signUpForm.getRawValue().email,
        this.signUpForm.getRawValue().password
    ).pipe(
        tap(() => this.authService.setUserFromToken())
    ).subscribe({
      next: () => this.router.navigate(['jobs']).then(() => location.reload())
    });
  }
}
