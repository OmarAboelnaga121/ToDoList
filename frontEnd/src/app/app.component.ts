import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  cookieMessage : string = "This Website Uses Cookies For Better Exprince."
  cookieDismiss : string = "Accept"
  cookieLinkText : string = "What is Cookies ?"

  ngOnInit(): void {
    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#054E83"
           },
           button: {
             background: "#0687B2",
             text: "#fff"
           }
         },
         theme: "",
         content: {
           message: this.cookieMessage,
           dismiss: this.cookieDismiss,
           link: this.cookieLinkText,
           href: "/dataprivacy" 
         }
       });

  }
 }

