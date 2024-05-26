import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacancyModel } from "@shared/modules/models/vacancy.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private baseUrl = '/api/';

    constructor(private http: HttpClient) { }

    signIn(email: string, password: string): void {
        this.http.post(this.baseUrl + '/login', { email, password });
    }

    signUp(email: string, password: string): void {
        this.http.post(this.baseUrl + '/register', { email, password });
    }
}
