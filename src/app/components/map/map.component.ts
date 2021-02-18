import { Component, Input, OnChanges } from "@angular/core";
import { icon, latLng, marker, tileLayer } from "leaflet";
import { IpAddress } from "src/app/state/ip-address/ip-address.state";

@Component({
  selector: "map",
  template: `
    <div *ngIf="options" class="map" leaflet [leafletOptions]="options" [leafletLayers]="layers" [(leafletCenter)]="center"></div>
  `,
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnChanges {
  @Input() ipAddress: IpAddress | null;

  public options: any;
  public layers: any;
  public center: any;

  public layersControlOptions = { position: 'bottomright' }

  public ngOnChanges(): void {
    if (this.ipAddress) {
      const lat = this.ipAddress?.location?.lat ?? 0;
      const lng = this.ipAddress?.location?.lng ?? 0;

      this.options = {
        layers: [
          tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...'})
        ],
        zoom: 8,
        center: latLng(lat, lng),
        zoomControl: false,
      };

      this.layers = [
        marker([lat, lng], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'assets/images/marker-icon.png',
            shadowUrl: 'assets/images/marker-shadow.png'
          })
        })
      ];

      this.center = latLng(lat, lng);
    }
  }
}
