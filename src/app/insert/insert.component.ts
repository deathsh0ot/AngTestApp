import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  name:string;
  rating:number;
  description:string;
  selectedFile:any;

  constructor(private service:MovieService,private router:Router) { }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  saveMovie(){

  this.service.saveMovie(this.name,this.rating,this.description,this.selectedFile).subscribe(response=>{
    let result=response.json();
    if(result.status=="success")
      {
        this.router.navigate(["/list"]);
      }
      else
      {
        alert("Something Went Wrong...");
      }
  });
}

  ngOnInit() {
  }

}
