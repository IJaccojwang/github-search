import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo'
import { GithubService } from '../github.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  providers:[GithubService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo: Repo;
  username: string;

  constructor(private githubservice:GithubService) {
    this.githubservice.getRepoData();
    this.repo = this.githubservice.repo
  }

  userSearch() {
    this.githubservice.userSearch(this.username);
  }

  ngOnInit() {
  }

}
