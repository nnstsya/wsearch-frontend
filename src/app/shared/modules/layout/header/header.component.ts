import {Component, OnInit} from '@angular/core';
import {filter, Observable, take, tap} from "rxjs";
import {DecodedUserModel, UserRoleModel} from "@shared/modules/models/user.model";
import { AuthService } from "@services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$: Observable<DecodedUserModel | null> = this.authService.currentUser$

  constructor(
      private authService: AuthService,
      private router: Router,
  ) {}

  openProfile() {
    this.user$
        .pipe(
            take(1),
            filter(Boolean),
            tap(({ id }) => {
              const routerCommands = id ? ['profile/', id] : ['auth/register'];

              this.router.navigate(routerCommands);
            })
        )
        .subscribe()

  }

    protected readonly UserRoleModel = UserRoleModel;
}
