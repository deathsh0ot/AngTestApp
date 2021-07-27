import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

url:string="http://localhost:4000/movies";

movie:any;
  constructor(private http:Http) {


   }

   getAllMovies(){

    return this.http.get(this.url);
    
   }

   deleteMovie(movieId){

    let deleteUrl=this.url+"/"+movieId;
    return this.http.delete(deleteUrl);

   }

   saveMovie(name,rating,description,selectedFile){

  
    // this.movie=
    //   {
    //     "name":name,
    //     "rating":rating,
    //     "description":description
    //   }
    //   const header = new Headers({'Content-Type': 'application/json'});
    //   const requestOption = new RequestOptions({headers: header});

    let formData= new FormData();
    formData.append('name',name);
    formData.append('rating',rating);
    formData.append('description',description);
    formData.append('image',selectedFile);
    
      return this.http.post(this.url,formData);

   }


   getMovieById(movieId){

    return this.http.get(this.url+"/"+movieId);
   }

   updateMovie(movieId,name,rating,description){

    let newUrl=this.url+"/"+movieId;
    this.movie=
      {
        "name":name,
        "rating":rating,
        "description":description
      }
      
    return this.http.put(newUrl,this.movie);

   }
}
