import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // this NgFor is used as a Structural Directive in the app.html file, to display the api fetch
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  http = inject(HttpClient);
  title = 'Dating App';
  users : any;
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/user').subscribe({
      next: Response => this.users = Response,
      error: error => console.log(error),
      complete: () => console.log("request has been completed")
    })
  }
}
