import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
declare let jquery:any;
declare let $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void{
    $(".button-collapse").sideNav();
  }

  redirect(link: string): void{
    this.router.navigate([link]);
  }
}
