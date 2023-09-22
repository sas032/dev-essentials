import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEncdecComponent } from './base-encdec.component';

describe('BaseEncdecComponent', () => {
  let component: BaseEncdecComponent;
  let fixture: ComponentFixture<BaseEncdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseEncdecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseEncdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
