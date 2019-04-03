import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { RepositoriesComponent } from '../repositories/repositories.component';
import { RepoComponent } from '../repo/repo.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"profile",component:ProfileComponent},
  {path:"repositories",component:RepositoriesComponent},
  {path:"repo",component:RepoComponent},
  {path:"",redirectTo:"/home", pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
