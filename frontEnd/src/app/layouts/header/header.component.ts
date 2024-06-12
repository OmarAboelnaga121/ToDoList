import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  constructor(private router: Router) {}

  // The menu for mobile
  menuValue:boolean = false

  // fun for opening the menu
  openMenu(){
    this.menuValue = !this.menuValue
  }

  // to controll on the navbar 
  navControl:boolean = false

  ngOnInit(): void {
    // To handle when The nav disappear and appear according to url
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      if (event.url.startsWith('/dashboard')) {
        // console.log(event.url);
        this.navControl = true;
      } else {
        // console.log(event.url);
        this.navControl = false;
      }
    });
  }
}