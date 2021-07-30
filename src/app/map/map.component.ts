import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
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

  @ViewChild('map') map: ElementRef | null = null;
  @ViewChild('downloadLink') downloadLink: ElementRef | null = null;

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
    preferCanvas: true,
    zoom: 5,
    center: this.center,
  };
  constructor() {}

  ngOnInit(): void {}
  onGenerateImage() {
    if (this.map && this.downloadLink) {
      html2canvas(this.map.nativeElement, {
        allowTaint: true,
        useCORS: true,
      }).then((canvas) => {
        canvas.toBlob(function (blob) {
          // To download directly on browser default 'downloads' location
          let link = document.createElement('a');
          link.download = 'image.png';
          link.href = URL.createObjectURL(blob);
          link.click();
        }, 'image/png');
      });
    }
  }
}
