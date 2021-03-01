import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsModel } from '../models/ProjectsModel'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  currentLangObs = new BehaviorSubject<string>('pl');


  getCurrentLang(): Observable<string> {
    return this.currentLangObs.asObservable();
  }


  changeLang(lang: string) {
    this.currentLangObs.next(lang);
  }



  getByProjectCategory(category: string): Observable<ProjectsModel[]> {
    return this.http.get<ProjectsModel[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(p => p.categories.includes(category))));
  }

  // getByProjectNotCategory(category: string): Observable<ProjectsModel[]> {
  //   return this.http.get<ProjectsModel[]>('./assets/data/projects.json').pipe(
  //     map(projects => projects.filter(p => !p.categories.includes(category))));
  // }

  getProjectByID(id: number): Observable<ProjectsModel[]> {
    return this.http.get<ProjectsModel[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(p => p.id === id)));
  }
}



