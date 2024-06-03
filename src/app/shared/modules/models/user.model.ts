import {VacancyModel} from "@shared/modules/models/vacancy.model";

export interface UserModel {
  id?: string;
  email: string;
  name?: string;
  password?: string;
  role?: UserRoleModel;
  vacancies?: VacancyModel[];
}

export interface DecodedUserModel {
  id: string;
  sub: string;
  role: UserRoleModel;
  exp: number;
}

export enum UserRoleModel {
  EMPLOYER = 'EMPLOYER',
  EMPLOYEE = 'EMPLOYEE',
}

export interface UserCredentials {
  token: string;
  type: string;
  algorithm: string;
  expiresAt: string;
}
