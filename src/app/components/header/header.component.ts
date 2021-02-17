import { Component, Input } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "header",
  template: `
    <div class="header-container">
      <h1>IP Address Tracker</h1>
      <search-input></search-input>
      <address-details [ipAddress]="ipAddress"></address-details>
    </div>
  `,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() ipAddress: IpAddress | null;
}
