import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meili';

  fileContent$ = new Subject<string>();
  onFileRead($event: string) {
    this.fileContent$.next($event);
  }
}
