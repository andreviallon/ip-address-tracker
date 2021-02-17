import { Component, Input } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "address-details",
  template: `
    <div class="card" *ngIf="ipAddress">
      <div class="flex-container">
        <div class="details-container">
          <h4>IP Address</h4>
          <p>{{ ipAddress.ip }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>Location</h4>
          <p>{{ ipAddress.location.city }}, {{ ipAddress.location.country }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>IP Address</h4>
          <p>192.928.382.901</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>IPS</h4>
          <p>{{ ipAddress.ips }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./address-details.component.scss"]
})
export class AddressDetailsComponent {
  @Input() ipAddress: IpAddress;

  ngOnChanges() {
    if (this.ipAddress) {
      console.log("ipAddress", this.ipAddress);
    }
  }
}
