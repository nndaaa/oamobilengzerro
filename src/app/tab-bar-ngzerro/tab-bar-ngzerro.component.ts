import { Component } from '@angular/core';

@Component({
  selector: 'tab-bar-ngzerro',
  templateUrl: './tab-bar-ngzerro.component.html'
})
export class TabBarNgzerroComponent {
  hidden = false;
  fullScreen = false;
  topFlag = false;
  tintColor = '#108ee9';
  unselectedTintColor = '#888';
  tabbarStyle: object = { height: '400px' };

  showTabBar(event) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showFullScreen(event) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0
        }
      : { height: '400px' };
  }

  changePosition(event) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  onPress(event) {
    console.log('event: ', event);
  }
}

