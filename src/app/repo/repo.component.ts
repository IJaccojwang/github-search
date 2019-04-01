import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { User } from '../user'
import { Singlerep } from '../singlerep'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  providers:[GithubService],
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  user: User;
  singlerep: Singlerep;
  username:string;
  reponame:string;

  constructor(private githubservice:GithubService) {
    this.githubservice.getUserData()
    this.githubservice.getRep()
    this.user = this.githubservice.user
    this.singlerep = this.githubservice.singlerep
   }

   search() {
     this.githubservice.repoSearch(this.username, this.reponame);
   }
  ngOnInit() {

  }

}
