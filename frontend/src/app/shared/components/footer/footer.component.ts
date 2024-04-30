import { Component } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faFacebookF = faFacebookF;
}
