import { Component, Input, OnInit } from '@angular/core';
import {
  tileLayer,
  latLng,
  LatLng,
  Layer,
  Polygon,
  polygon,
  polyline,
  Polyline,
} from 'leaflet';
import { GpxTrackpoint } from 'practical-gpx-to-js';

@Component({
  selector: 'meili-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center: LatLng = latLng(46.879966, -121.726909);

  layers: Polyline[] = [];

  @Input() set trackpoints(values: GpxTrackpoint[] | null) {
    if (values && values.length > 0) {
      this.center = latLng(values[0].lat, values[0].lon);
      const sortedFollowingTime = values.sort(
        (a, b) => a.time!.getTime() - b.time!.getTime()
      );
      const coordinates = sortedFollowingTime.map((v) => latLng(v.lat, v.lon));
      const layer = polyline(coordinates);
      this.layers = [layer];
    }
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909),
  };
  constructor() {}

  ngOnInit(): void {}
}
