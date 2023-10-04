import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBackgroundRemovalComponent } from './image-background-removal.component';

describe('ImageBackgroundRemovalComponent', () => {
  let component: ImageBackgroundRemovalComponent;
  let fixture: ComponentFixture<ImageBackgroundRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBackgroundRemovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBackgroundRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
