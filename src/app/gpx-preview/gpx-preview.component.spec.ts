import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpxPreviewComponent } from './gpx-preview.component';

describe('GpxPreviewComponent', () => {
  let component: GpxPreviewComponent;
  let fixture: ComponentFixture<GpxPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpxPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpxPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
