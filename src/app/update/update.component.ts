import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  movieId:number;
  name:string;
  rating:number;
  description:string;

constructor(private router: Router,
    service: MovieService,
    activeRoute: ActivatedRoute,
    private servive:MovieService) { 


      activeRoute
      .queryParams
      .subscribe((params) => {
        this.movieId = params.movieId;
        console.log("In Update : "+this.movieId);

        service
          .getMovieById(this.movieId)
          .subscribe((response) => {
            const body = response.json();
            const movies = body['data'];

            if (movies.length > 0) {

              const movie = movies[0];
              this.name=movie.name;
              this.rating=movie.rating;
              this.description=movie.description;
            }
          });
      });
  }

  updateMovie(){
    this.servive.updateMovie(this.movieId,this.name,this.rating,this.description).subscribe(response=>{

      let result=response.json();

      if(result.status=="success"){
      this.router.navigate(["/list"]);
      }
      else{
        alert("Something Went Wrong...");
      }

    });
    
  }

  ngOnInit() {
  }

}
