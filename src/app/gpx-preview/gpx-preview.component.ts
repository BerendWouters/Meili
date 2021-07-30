import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Gpx, GpxTrackpoint, parseGpx } from 'practical-gpx-to-js';

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

        const firstTrackpoint = gpx.tracks![0].trackpoints[0];
        this.trackpointsSelected.next([firstTrackpoint]);
      });
    }
  }

  @Output() trackpointsSelected = new EventEmitter<GpxTrackpoint[]>();

  gpx: Gpx | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged($event: MatSelectionListChange) {
    const selectedTrackpoints = $event.source.selectedOptions.selected.map(
      (x) => x.value
    ) as GpxTrackpoint[];
    this.trackpointsSelected.emit(selectedTrackpoints);
  }
}
