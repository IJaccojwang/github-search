import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { GithubService } from '../github.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers:[GithubService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  username: string;

  constructor(private githubservice:GithubService) {
    this.githubservice.getUserData()
    this.user = this.githubservice.user
   }


  ngOnInit() {
  }

}
