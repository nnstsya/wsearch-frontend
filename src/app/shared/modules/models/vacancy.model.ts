export interface VacancyModel {
  id?: number
  name: string
  company: string
  type: VacancyTypeModel
  salary: string
  description: string
  date: number
}

export enum VacancyTypeModel {
  OFFICE = 'OFFICE',
  REMOTE = 'REMOTE',
}
