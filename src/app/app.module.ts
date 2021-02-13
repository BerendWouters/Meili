import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    GpxPreviewComponent,
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
