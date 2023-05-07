import { Component } from '@angular/core';
import {
  faGlobe,
  faCircleUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faGlobe = faGlobe;
  faCircleUser = faCircleUser;
  faBars = faBars;
}
