import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Report } from '../models/report';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private jsonUrl="../json/report.json"
  constructor(private http:HttpClient) { }

  getReportes():Observable<Report[]>{
    return this.http.get<Report[]>(this.jsonUrl);
  }

}
