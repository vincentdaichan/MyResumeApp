import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
    { path: '', component: OverviewComponent},
    { path: 'overview', component: OverviewComponent},
    { path: 'education', component: EducationComponent},
    { path: 'experience', component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
