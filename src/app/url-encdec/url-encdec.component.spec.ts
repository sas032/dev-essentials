import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlEncdecComponent } from './url-encdec.component';

describe('UrlEncdecComponent', () => {
  let component: UrlEncdecComponent;
  let fixture: ComponentFixture<UrlEncdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlEncdecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlEncdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
