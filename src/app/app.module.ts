import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GpxLoadComponent } from './gpx-load/gpx-load.component';
import { GpxPreviewComponent } from './gpx-preview/gpx-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    GpxLoadComponent,
    GpxPreviewComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
