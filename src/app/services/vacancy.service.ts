import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacancyModel } from "@shared/modules/models/vacancy.model";

@Injectable({
    providedIn: 'root'
})

export class VacancyService {

    private baseUrl = '/api/';

    constructor(private http: HttpClient) { }

    getAllVacancies(): Observable<VacancyModel[]> {
        return this.http.get<VacancyModel[]>('http://localhost:8080/jobs/');
    }

    createVacancy(vacancy: VacancyModel): Observable<VacancyModel> {
        return this.http.post<VacancyModel>('http://localhost:8080/jobs/create', vacancy);
    }

    deleteVacancy(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/jobs/${id}/edit`);
    }

    getVacancyById(id: number): Observable<VacancyModel> {
        return this.http.get<VacancyModel>(`${this.baseUrl}/jobs/${id}`);
    }

    updateVacancy(id: number, vacancy: VacancyModel): Observable<VacancyModel> {
        return this.http.post<VacancyModel>(`${this.baseUrl}/jobs/${id}/edit`, vacancy);
    }
}
