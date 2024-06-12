import { Component } from '@angular/core';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopUpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
