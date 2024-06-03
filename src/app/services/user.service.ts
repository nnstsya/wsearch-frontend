import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from "jwt-decode";
import { UserModel, UserRoleModel } from "@shared/modules/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly baseUrl = 'http://localhost:8080/';

    constructor(private http: HttpClient) {}

    editUser(id: string, name: string, email: string): Observable<boolean> {
        return this.http.put<boolean>(`${this.baseUrl}profile/${id}`, {id, name, email});
    }

    deleteUser(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}profile/${id}`);
    }

    getUserById(id: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.baseUrl}profile/${id}`)
    }
}
