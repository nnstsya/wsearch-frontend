import {Component, OnInit} from '@angular/core';
import {UserService} from "@services/user.service";
import {filter, map, Observable, switchMap, take, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DecodedUserModel, UserModel, UserRoleModel} from "@shared/modules/models/user.model";
import {AuthService} from "@services/auth.service";
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {VacancyModel} from "@shared/modules/models/vacancy.model";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userConstParams = {id: ''}
  userVacancies: VacancyModel[] = []
  user$: Observable<DecodedUserModel | null> = this.authService.currentUser$

  userEditForm = this.formBuilder.group({
    name: this.formBuilder.control('name', [Validators.required, Validators.min(2), Validators.max(30)]),
    email: this.formBuilder.control('email', [Validators.required, Validators.email]),
  });

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private formBuilder: NonNullableFormBuilder,
              private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
        take(1),
        map(params => params.get('id')),
        filter((id) => !!id),
        switchMap((id) => this.userService.getUserById(id!)),
        tap(value => {
          this.userConstParams.id = value.id!
          this.userVacancies = value.vacancies || []
          this.userEditForm.controls.name.setValue(value.name!, {emitEvent: false})
          this.userEditForm.controls.email.setValue(value.email, {emitEvent: false})
          })
    ).subscribe()
  }

  submitted = false;

  deleteAccount() {
    this.userService.deleteUser(this.userConstParams.id).subscribe({
      next: () => {
        this.logout();
      },
    })
  }

  onSubmit() {
    if (this.userEditForm.valid) {
      const id = this.userConstParams.id;
      const name = this.userEditForm.controls.name.value;
      const email = this.userEditForm.controls.email.value;
      this.submitted = true;
      this.edit(name, email);
    }
  }

  edit(name: string, email: string) {
    this.userService.editUser(this.userConstParams.id, name, email).subscribe({
      next: () => {
        location.reload()
      }
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.authService.setUserFromToken();
    this.router.navigate(['jobs']);
  }

  protected readonly UserRoleModel = UserRoleModel;
}
