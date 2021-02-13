import { Component } from '@angular/core';
import { GpxTrackpoint } from 'practical-gpx-to-js';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meili';

  fileContent$ = new Subject<string>();
  trackpoints$ = new Subject<GpxTrackpoint[]>();

  onFileRead($event: string) {
    this.fileContent$.next($event);
  }

  onTrackpointsSelected(trackpoints: GpxTrackpoint[]) {
    this.trackpoints$.next(trackpoints);
  }
}
