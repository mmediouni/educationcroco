import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CounterComponent } from './components/counter/counter.component';
import { EventsComponent } from './components/events/events.component';
import { TeamComponent } from './components/team/team.component';
import { NewsComponent } from './components/news/news.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { AboutComponent } from './components/about/about.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { PartnersComponent } from './components/partners/partners.component';
import { CourseComponent } from './components/course/course.component';
import { EventComponent } from './components/event/event.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { TutorsComponent } from './components/tutors/tutors.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SocialListComponent } from './components/social-list/social-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ChangePipe } from './pipes/change.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses.component';
import { AdminTrainersComponent } from './components/admin-trainers/admin-trainers.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminCourseComponent } from './components/admin-course/admin-course.component';
import { DisplayCourseComponent } from './components/display-course/display-course.component';
import { DisplayHidePipe } from './pipes/display-hide.pipe';
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopularCoursesComponent } from './components/popular-courses/popular-courses.component';
import { SearchComponent } from './components/search/search.component';
import { AddTrainerComponent } from './components/add-trainer/add-trainer.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    FeaturesComponent,
    CoursesComponent,
    CounterComponent,
    EventsComponent,
    TeamComponent,
    NewsComponent,
    NewsletterComponent,
    MenuComponent,
    HomeSliderComponent,
    AboutComponent,
    WhyUsComponent,
    FeatureComponent,
    AboutSectionComponent,
    PartnersComponent,
    CourseComponent,
    EventComponent,
    TutorComponent,
    TutorsComponent,
    TeamsComponent,
    SocialListComponent,
    AddCourseComponent,
    AsterixPipe,
    ReversePipe,
    ChangePipe,
    AdminComponent,
    AdminCoursesComponent,
    AdminTrainersComponent,
    AdminUsersComponent,
    AdminCourseComponent,
    DisplayCourseComponent,
    DisplayHidePipe,
    NotFoundComponent,
    PopularCoursesComponent,
    SearchComponent,
    AddTrainerComponent,
    WeatherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
