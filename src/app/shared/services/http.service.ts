import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectsModel } from '../models/ProjectsModel'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }


  // getAllProjects(): Observable<ProjectsModel[]> {
  //   return this.http.get<ProjectsModel[]>('./assets/data/projects.json');
  // }

  getByProjectCategory(category: string): Observable<ProjectsModel[]> {    
    return this.http.get<ProjectsModel[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(p => p.categories.includes(category))));
  }
  getProjectByID(id: number): Observable<ProjectsModel[]> {    
    return this.http.get<ProjectsModel[]>('./assets/data/projects.json').pipe(
      map(projects => projects.filter(p => p.id ===  id)));
  }
}



