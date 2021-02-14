import { Component, OnInit } from "@angular/core";
import * as leaflet from "leaflet";

@Component({
  selector: "map",
  template: `
    <div class="map-container">
      <div class="map-frame">
        <div id="map"></div>
      </div>
    </div>
  `,
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  // public tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  // });

  public ngOnInit(): void {
    // this.tiles.addTo(this.map);
  }
}
