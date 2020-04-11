import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCourseComponent } from './components/choose-course/choose-course.component';


const routes: Routes = [
  { path: '', component: ChooseCourseComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
