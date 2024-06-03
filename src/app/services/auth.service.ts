import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {jwtDecode} from "jwt-decode";
import {DecodedUserModel, UserCredentials, UserModel, UserRoleModel} from "@shared/modules/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: BehaviorSubject<DecodedUserModel | null> = new BehaviorSubject<DecodedUserModel | null>(null);
    private readonly baseUrl = 'http://localhost:8080/';

    get currentUser$() {
        return this.user$.asObservable();
    }

    constructor(private http: HttpClient) {
        const token = localStorage.getItem('jwtToken');

        if (token && this.isTokenValid(token)) {
            this.setUserFromToken();
        }
    }

    isTokenValid(token: string): boolean {
        try {
            const decodedToken: { id: number, sub: string, role: UserRoleModel, exp: number } = jwtDecode(token);
            const currentTime = Math.floor(Date.now() / 1000);
            return decodedToken.exp >= currentTime;
        } catch (error) {
            return false;
        }
    }

    setUserFromToken() {
        try {
            const token = localStorage.getItem('jwtToken') ?? '';
            const decodedToken: DecodedUserModel = jwtDecode(token);
            this.user$.next(decodedToken);
        } catch (error) {
            this.user$.next(null);
        }
    }

    signIn(email: string, password: string): Observable<UserCredentials> {
        return this.http.post<UserCredentials>(`${this.baseUrl}auth/login`, { email, password }).pipe(
            tap((res: UserCredentials) => {
                localStorage.setItem('jwtToken', res.token);
                this.setUserFromToken();
            })
        );
    }

    signUp(user: UserModel): Observable<any> {
        return this.http.post(`${this.baseUrl}auth/register`, user);
    }
}
