import { Pipe, PipeTransform } from '@angular/core';
import {UserRoleModel} from "@shared/modules/models/user.model";

@Pipe({
    name: 'validateRoles'
})
export class ValidateRolesPipe implements PipeTransform {
    transform(value: UserRoleModel, role: UserRoleModel): boolean {
        return value === role;
    }
}
