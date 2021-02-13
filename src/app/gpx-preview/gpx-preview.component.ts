import { Component, Input, OnInit } from '@angular/core';
import { Gpx, parseGpx } from 'practical-gpx-to-js';

@Component({
  selector: 'meili-gpx-preview',
  templateUrl: './gpx-preview.component.html',
  styleUrls: ['./gpx-preview.component.scss'],
})
export class GpxPreviewComponent implements OnInit {
  @Input() set fileContent(value: string | null) {
    if (value) {
      parseGpx(value).then((gpx) => {
        this.gpx = gpx;
        console.log(this.gpx);
      });
    }
  }

  gpx: Gpx | null = null;

  constructor() {}

  ngOnInit(): void {}
}
