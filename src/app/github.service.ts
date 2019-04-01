import { Injectable } from '@angular/core';
import { User } from '../app/user';
import { Repo } from '../app/repo';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  user: User;
  repo: Repo;
  private username:string;


  constructor(private http:HttpClient) {
    this.username = "IJaccojwang";
    this.user = new User("","", 0, 0, 0, 0, 0);
    this.repo = new Repo([]);
  }

  getUserData(){

    interface ApiResponse{
        avatar_url: string;
        login:string;
        followers:number;
        following:number;
        public_repos:number;
        public_gists:number;
        created_at:number;

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>( 'https://api.github.com/users/' + this.username +'?access_token=' + environment.apiKey).toPromise().then(response=>{

            this.user.avatarimg=response.avatar_url;
            this.user.user=response.login;
            this.user.followers=response.followers;
            this.user.following=response.following;
            this.user.repoNo=response.public_repos;
            this.user.gistNo=response.public_gists;
            this.user.date=response.created_at;


            resolve()
        },
        error=>{
                this.user.avatarimg="No image"
                this.user.user="Ian";
                this.user.user="Ian";
                this.user.followers=0;
                this.user.following=0;
                this.user.repoNo=0;
                this.user.gistNo=0;
                this.user.date=0;
                reject(error)
            }
        )
    })

    return promise
  }

  getRepoData(){


    let promise =new Promise((resolve,reject)=>{
        this.http.get( 'https://api.github.com/users/' + this.username +'/repos?access_token=' + environment.apiKey).toPromise().then(response=>{

            this.repo.reposArray=response;

            resolve()
        },
        error=>{
                this.repo.reposArray=[];

                reject(error)
            }
        )
    })

    return promise
  }

  userSearch(username:string) {
    this.username = username;
    this.getUserData();
    this.getRepoData();
  }
}
