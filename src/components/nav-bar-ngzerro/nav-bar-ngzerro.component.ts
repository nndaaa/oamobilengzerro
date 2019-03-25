import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar-ngzerro',
  templateUrl: './nav-bar-ngzerro.component.html'
})
export class NavBarNgzerroComponent {
  onLeftClick() {
    console.log('onLeftClick');
  }
}
