import { Component, Input } from "@angular/core";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "address-details",
  template: `
    <div>
      <h1>it works</h1>
    </div>
  `,
  styleUrls: ["./address-details.component.scss"]
})
export class AddressDetailsComponent {
  @Input() ipAddress: IpAddress;
}
