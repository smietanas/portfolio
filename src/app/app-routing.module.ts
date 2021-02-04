import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FutureComponent } from './components/future/future.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  // { path: '', component: HeroComponent },
  // { path: 'hero', component: HeroComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'future', component: FutureComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
