import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseCourseComponent } from './components/choose-course/choose-course.component';


const routes: Routes = [
  { path: '', component: ChooseCourseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
