import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header-container">
      <h1>IP Address Tracker</h1>
      <search-input></search-input>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
