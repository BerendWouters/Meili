import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpxLoadComponent } from './gpx-load.component';

describe('GpxLoadComponent', () => {
  let component: GpxLoadComponent;
  let fixture: ComponentFixture<GpxLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpxLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpxLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
