import { Component } from "@angular/core";
import { Dispatch } from "@ngxs-labs/dispatch-decorator";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { IpAddressState, IpAddress } from "./state/ip-address/ip-address.state";
import { FetchIpAddress } from "./state/ip-address/ip-address.state.actions";

@Component({
  selector: "app-root",
  template: `
    <div class="app-container">
      <header [ipAddress]="ipAddress$ | async" [loading]="loading$ | async" [errorMessage]="errorMessage$ | async" (search)="fetchIpAddress($event)"></header>
      <map [ipAddress]="ipAddress$ | async"></map>
    </div>
  `,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Select(IpAddressState.ipAddress) ipAddress$: Observable<IpAddress | null>;
  @Select(IpAddressState.loading) loading$: Observable<boolean | null>;
  @Select(IpAddressState.errorMessage) errorMessage$: Observable<string>;

  @Dispatch() fetchIpAddress = (searchQuery: string) => new FetchIpAddress(searchQuery);

  public ngOnInit(): void {
    this.fetchIpAddress('');
  }
}
