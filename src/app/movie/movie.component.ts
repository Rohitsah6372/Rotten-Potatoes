import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  type='';
   id='';
  route: any;
  url='';
  movies:any;
  http: any;
  movie:any;
  index:any;

  constructor() { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id'];
    if(this.type === 'trending'){
      this.url='http://localhost:4200/assets/data/trending-movies.json';
    }
    if(this.type === 'threatre'){
      this.url='http://localhost:4200/assets/data/trending-movies.json';
    }
    if(this.type === 'popular'){
      this.url='http://localhost:4200/assets/data/trending-movies.json';
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies: any)=>{
      this.movies=movies;
      let index=this.movies.findIndex((movie: { id: string; }) => movie.id== this.id);
    });
   
  }

}
