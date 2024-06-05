import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private route : Router, private cookies : CookieService){}

  navControl:boolean = false

  ngOnInit() : void{
    if (this.route.url.startsWith('/dashboard')) {
      console.log(this.route.url);
      
      this.navControl = true;
    } else {
      this.navControl = false;
    }
  }

 }

