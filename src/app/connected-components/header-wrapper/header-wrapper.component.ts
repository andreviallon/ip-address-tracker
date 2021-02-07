import { IpAddressState } from '../../state/ip-address/ip-address.state';
import { Component, OnInit } from '@angular/core';
import { FetchIpAddress } from '../../state/ip-address/ip-address.state.actions';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { IpAddress } from 'src/app/state/ip-address/ip-address.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'header-wrapper',
  template: `
    <header [ipAddress]="ipAddress$ | async" ></header>
  `,
  styleUrls: ['./header-wrapper.component.scss']
})
export class HeaderWrapperComponent implements OnInit {

  @Select(IpAddressState.ipAddress) ipAddress$: Observable<IpAddress>;
  @Select(IpAddressState.loading) loading$: Observable<boolean>;

  @Dispatch() fetchIpAddress = () => new FetchIpAddress('');

  public ngOnInit(): void {
    this.fetchIpAddress();
  }

}
