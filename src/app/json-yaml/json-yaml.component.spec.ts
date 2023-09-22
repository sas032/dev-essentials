import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonYamlComponent } from './json-yaml.component';

describe('JsonYamlComponent', () => {
  let component: JsonYamlComponent;
  let fixture: ComponentFixture<JsonYamlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonYamlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonYamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
