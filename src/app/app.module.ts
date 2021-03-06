import { IpAddressState } from "./state/ip-address/ip-address.state";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { AddressDetailsComponent } from "./components/address-details/address-details.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { NgxsModule } from "@ngxs/store";
import { NgxsDispatchPluginModule } from "@ngxs-labs/dispatch-decorator";
import { MapComponent } from "./components/map/map.component";

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchInputComponent,
    MapComponent,
    AddressDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxsModule.forRoot([IpAddressState]),
    NgxsDispatchPluginModule.forRoot(),
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
