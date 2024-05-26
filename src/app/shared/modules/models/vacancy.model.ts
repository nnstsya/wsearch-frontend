export interface VacancyModel {
  id?: number
  name: string
  company: string
  type: string
  salary: string
  description: string
  date: number
}

export enum VacancyTypeModel {
  OFFICE = 'Офіс',
  REMOTE = 'Віддалена робота',
}
