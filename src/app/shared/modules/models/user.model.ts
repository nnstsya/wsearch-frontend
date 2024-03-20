export interface UserModel {
  id: string;
  username: string;
  role: UserRoleModel;
}

export enum UserRoleModel {
  EMPLOYER = 'EMPLOYER',
  EMPLOYEE = 'EMPLOYEE',
}
