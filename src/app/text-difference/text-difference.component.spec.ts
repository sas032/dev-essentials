import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDifferenceComponent } from './text-difference.component';

describe('TextDifferenceComponent', () => {
  let component: TextDifferenceComponent;
  let fixture: ComponentFixture<TextDifferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDifferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
