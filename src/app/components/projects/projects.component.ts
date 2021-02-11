import {Component, OnInit } from '@angular/core';
import { ProjectsModel } from 'src/app/shared/models/ProjectsModel';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  menuItems: any;
  projectList: ProjectsModel[];
  item :ProjectsModel;
  constructor(private service : HttpService) { }


  ngOnInit(): void {

    this.menuItems = document.querySelectorAll('.menu__item');
    
    this.service.getByProjectCategory('all').subscribe(data => {      
      this.projectList = data;        
    });
  }

  showMore(id:number){
    this.service.getProjectByID(id).subscribe(data =>{
      this.item = data[0];
    })
  }
  filterProject(e:MouseEvent) {
    const target = e.target as HTMLElement;
    const dataFilter = target.getAttribute('data-filter');

    if (dataFilter) {
      this.service.getByProjectCategory(dataFilter).subscribe(data => { 
        this.projectList = data; 
      
      });
      

       this.menuItems.forEach((item: HTMLElement) => item.classList.remove("active"));
       target.classList.add("active") 
       
    }
  }





}
