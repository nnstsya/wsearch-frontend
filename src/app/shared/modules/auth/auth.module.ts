import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ValidateRolesPipe } from './pipes/validate-role.pipe';

@NgModule({
    declarations: [
        ValidateRolesPipe,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
    ],
    providers: [
        JwtAuthGuard,
    ],
    exports: [
        ValidateRolesPipe,
    ],
})
export class AuthModule {}
