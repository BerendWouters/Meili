import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Gpx, GpxTrackpoint, GpxTrack, parseGpx } from 'practical-gpx-to-js';

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

  private _selectedTrackpoints: GpxTrackpoint[] = [];

  gpx: Gpx | null = null;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged($event: MatSelectionListChange) {
    const selectedTrackpoints = $event.source.selectedOptions.selected.map(
      (x) => x.value
    ) as GpxTrackpoint[];
    this._selectedTrackpoints = selectedTrackpoints;
    this.trackpointsSelected.emit(selectedTrackpoints);
  }

  markEveryNthElement(trackIndex: number, skip: number) {
    const gpx = this.gpx as Gpx;
    if (gpx && gpx.tracks) {
      const track = gpx.tracks[trackIndex] as GpxTrack;
      const selectedTrackpoints = track.trackpoints.filter(
        (_el: GpxTrackpoint, index: number) => index >= skip
      );
      this._selectedTrackpoints = selectedTrackpoints;
      this.trackpointsSelected.emit(selectedTrackpoints);
    }
  }
}
