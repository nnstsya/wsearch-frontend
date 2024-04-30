export interface VacancyModel {
  id: string
  name: string
  company: string
  type: string
  salary: string
  description: string
  date: string
}

export enum VacancyTypeModel {
  OFFICE = 'Офіс',
  REMOTE = 'Віддалена робота',
}
