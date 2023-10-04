import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToPdfConverterComponent } from './image-to-pdf-converter.component';

describe('ImageToPdfConverterComponent', () => {
  let component: ImageToPdfConverterComponent;
  let fixture: ComponentFixture<ImageToPdfConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageToPdfConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageToPdfConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
