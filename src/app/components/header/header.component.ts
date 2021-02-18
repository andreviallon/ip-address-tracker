import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "header",
  template: `
    <div class="header-container">
      <h1>IP Address Tracker</h1>
      <search-input (search)="search.emit($event)"></search-input>
      <address-details [ipAddress]="ipAddress" [loading]="loading" [errorMessage]="errorMessage"></address-details>
    </div>
  `,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() ipAddress: IpAddress | null;
  @Input() loading: boolean | null;
  @Input() errorMessage: string;

  @Output() search = new EventEmitter<string>();
}
