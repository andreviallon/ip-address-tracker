import { Component, Input } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "address-details",
  template: `
    <div class="card">
      <div class="flex-container" *ngIf="ipAddress && !loading">
        <div class="details-container">
          <h4>IP Address</h4>
          <p>{{ ipAddress.ip }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>Location</h4>
          <p>{{ ipAddress.location?.city }}, {{ ipAddress.location?.country }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>Timezone</h4>
          <p>{{ ipAddress.location?.timezone }}</p>
        </div>
        <div class="vertical-line"></div>
        <div class="details-container">
          <h4>ISP</h4>
          <p>{{ ipAddress.isp }}</p>
        </div>
      </div>
      <div *ngIf="loading">
        <p>Loading...</p>
      </div>
    </div>
  `,
  styleUrls: ["./address-details.component.scss"]
})
export class AddressDetailsComponent {
  @Input() ipAddress: IpAddress | null;
  @Input() loading: boolean | null;
}
