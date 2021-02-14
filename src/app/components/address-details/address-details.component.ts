import { Component, Input } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "address-details",
  template: `
    <div class="card">
      <div class="flex-container">
        <div class="details-container">
          <h4>IP Address</h4>
          <p>192.928.382.901</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>IP Address</h4>
          <p>192.928.382.901</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>IP Address</h4>
          <p>192.928.382.901</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>IP Address</h4>
          <p>192.928.382.901</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./address-details.component.scss"]
})
export class AddressDetailsComponent {
  @Input() ipAddress: IpAddress;
}
