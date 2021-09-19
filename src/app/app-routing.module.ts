import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { SignupComponent } from './components/signup/signup.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'footer', component:FooterComponent},
  {path:'about', component:AboutComponent},
  {path:'add-course', component:AddCourseComponent},
  {path:'add-trainer', component:AddTrainerComponent},
  {path:'edit-course/:id', component:AddCourseComponent},
  {path:'admin', component:AdminComponent},
  {path:'diplayCourse/:id', component:DisplayCourseComponent},
  {path:'pop-courses', component:PopularCoursesComponent},
  {path:'weather', component:WeatherComponent},
  {path:'404-not-found', component:NotFoundComponent},
  {path:'**', redirectTo:'404-not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
