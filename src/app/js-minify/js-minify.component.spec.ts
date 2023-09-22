import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsMinifyComponent } from './js-minify.component';

describe('JsMinifyComponent', () => {
  let component: JsMinifyComponent;
  let fixture: ComponentFixture<JsMinifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsMinifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsMinifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
