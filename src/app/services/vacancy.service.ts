import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VacancyModel } from "@shared/modules/models/vacancy.model";
import {UserModel} from "@shared/modules/models/user.model";

@Injectable({
    providedIn: 'root'
})

export class VacancyService {

    private baseUrl = 'http://localhost:8080';

    constructor(private http: HttpClient) { }

    getAllVacancies(): Observable<VacancyModel[]> {
        return this.http.get<VacancyModel[]>(`${this.baseUrl}/jobs`);
    }

    createVacancy(vacancy: VacancyModel): Observable<VacancyModel> {
        return this.http.post<VacancyModel>(`${this.baseUrl}/jobs/create`, vacancy);
    }

    deleteVacancy(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.baseUrl}/jobs/${id}`);
    }

    getVacancyById(id: number): Observable<VacancyModel> {
        return this.http.get<VacancyModel>(`${this.baseUrl}/jobs/${id}`);
    }

    updateVacancy(id: number, vacancy: VacancyModel): Observable<VacancyModel> {
        return this.http.put<VacancyModel>(`${this.baseUrl}/jobs/${id}/edit`, vacancy);
    }

    addVacancy(userId: number, vacancyId: number,): Observable<boolean> {
        return this.http.put<boolean>(`${this.baseUrl}/jobs/${vacancyId}`, userId)
    }
}
