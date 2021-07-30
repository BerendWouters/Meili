import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'meili-gpx-load',
  templateUrl: './gpx-load.component.html',
  styleUrls: ['./gpx-load.component.scss'],
})
export class GpxLoadComponent implements OnInit {
  @Output() fileReadEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onChange($event: Event) {
    const eventTarget = $event.target as HTMLInputElement;
    const fileReader = new FileReader();
    const file = eventTarget.files?.item(0);
    if (file) {
      fileReader.onload = () => {
        const text = fileReader.result?.toString().trim();
        this.fileReadEvent.emit(text);
      };
      fileReader.readAsText(file);
    }
  }
}
