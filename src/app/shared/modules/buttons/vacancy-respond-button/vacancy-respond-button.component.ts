import {Component, Input, OnInit} from '@angular/core'
import {VacancyService} from "@services/vacancy.service";
import {AuthService} from "@services/auth.service";
import {jwtDecode} from "jwt-decode";
import {UserService} from "@services/user.service";
import {map, mergeMap, Observable, of, switchMap, tap} from "rxjs";
import {UserModel} from "@shared/modules/models/user.model";

@Component({
  selector: 'app-vacancy-respond-button',
  templateUrl: './vacancy-respond-button.component.html',
  styleUrls: ['./vacancy-respond-button.component.scss']
})
export class VacancyRespondButtonComponent implements OnInit{
  @Input() isSmall = true;
  @Input() vacancyId = 0;
  userId: string | null = null;

  constructor(
      private vacancyService: VacancyService,
      private authService: AuthService,
      private userService: UserService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        const decodedToken: { iat: number, id: number } = jwtDecode(token);
        this.userId = decodedToken.id + '';
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }

  addVacancy(): void {
    if (this.userId !== null) {
      this.checkIfAlreadyExists(this.vacancyId, this.userId).pipe(
          switchMap((exists: boolean) => {
            if (!exists) {
              return this.vacancyService.addVacancy(+this.userId!, this.vacancyId);
            } else {
              return of(null);
            }
          })
      ).subscribe();
    }
  }

  checkIfAlreadyExists(vacancyId: number, userId: string): Observable<boolean> {
    return this.userService.getUserById(userId).pipe(
        map((user: UserModel) => {
          return user.vacancies ? user.vacancies.some(v => v.id === vacancyId) : false;
        })
    );
  }
}