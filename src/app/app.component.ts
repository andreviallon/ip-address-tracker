import { Component } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { IpAddressState, IpAddress } from "./state/ip-address/ip-address.state";
import { FetchIpAddress } from "./state/ip-address/ip-address.state.actions";

@Component({
  selector: "app-root",
  template: ` <header [ipAddress]="ipAddress$ | async"></header> `
})
export class AppComponent {
  @Select(IpAddressState.ipAddress) ipAddress$: Observable<IpAddress>;
  @Select(IpAddressState.loading) loading$: Observable<boolean>;

  @Dispatch() fetchIpAddress = () => new FetchIpAddress("");

  public ngOnInit(): void {
    this.fetchIpAddress();
  }
}
