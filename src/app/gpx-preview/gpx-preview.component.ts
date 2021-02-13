import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'meili-gpx-preview',
  templateUrl: './gpx-preview.component.html',
  styleUrls: ['./gpx-preview.component.scss'],
})
export class GpxPreviewComponent implements OnInit {
  @Input() fileContent: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
