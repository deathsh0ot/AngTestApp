import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  
  movies:any;
  result:any;
  movie:any;  
  constructor(private service:MovieService,
    private router:Router) {

  this.getAllMovies();

}


getAllMovies(){

  this.service.getAllMovies().subscribe(response=>{

this.result=response.json();
this.movies=this.result.data;
console.log(this.movies.image);

  });
}


deleteMovie(movieId){

 this.service.deleteMovie(movieId).subscribe(response=>{

  let result=response.json();

      if(result.status=="success"){
        console.log("InDelete");
        this.getAllMovies();
      }
      else{
        alert("Something Went Wrong...");
      }

 });

}

updateMovie(movieId){

  this.router.navigate(['/update'], { queryParams: { movieId: movieId }});
}

  ngOnInit() {
  }

}
