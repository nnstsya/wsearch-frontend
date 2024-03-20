export interface JobModel {
  id: string;
  name: string;
  company: string;
  type: JobTypeModel;
  salary: number;
  description: string;
  date: Date;
}

export enum JobTypeModel {
  OFFICE = 'OFFICE',
  REMOTE = 'REMOTE',
}
