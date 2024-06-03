import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '@services/auth.service'
import {UserRoleModel} from "@shared/modules/models/user.model";
import {jwtDecode} from "jwt-decode";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        const token = localStorage.getItem('jwtToken');

        try {
            const decodedToken: { id: string, sub: string, role: UserRoleModel, exp: number } = jwtDecode(token!);
            this.authService.user$.next(decodedToken);
        } catch (e) {
            console.error('Token is not valid.');
        }

        if (token) {
            const isTokenValid = this.authService.isTokenValid(token);

            if (isTokenValid) {
                return true;
            }
        }

        this.router.navigate(['/jobs']);
        return false;
    }
}
