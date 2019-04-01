import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { GithubService } from '../github.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers:[GithubService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  username: string;

  constructor(private githubservice:GithubService) {
    this.githubservice.getUserData()
    this.user = this.githubservice.user
   }

   userSearch() {
     this.githubservice.userSearch(this.username);
   }
  ngOnInit() {

  }

}
