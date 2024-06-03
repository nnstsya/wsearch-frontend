import { Component } from '@angular/core'
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../../../services/auth.service";
import {UserCredentials, UserModel} from "@shared/modules/models/user.model";
import { tap } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  submitted = false;
  userIsValid = true;

  signInForm = this.formBuilder.group({
    email: this.formBuilder.control('', [Validators.required, Validators.email]),
    password: this.formBuilder.control('', Validators.required),
  });

  constructor(private authService: AuthService,
              private formBuilder: NonNullableFormBuilder,
              private router: Router
  ) {}

  onSubmit() {
    if (this.signInForm.valid) {
      this.submitted = true;
      this.signIn();
    }
  }

  signIn() {
    this.authService.signIn(
        this.signInForm.getRawValue().email,
        this.signInForm.getRawValue().password
    ).pipe(
        tap(() => this.authService.setUserFromToken())
    ).subscribe({
      next: () => this.router.navigate(['jobs']).then(() => location.reload()),
      error: () => {
        this.userIsValid = false;
        this.submitted = false;
      }
    });
  }
}
