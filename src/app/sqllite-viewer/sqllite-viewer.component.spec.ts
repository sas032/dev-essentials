import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlliteViewerComponent } from './sqllite-viewer.component';

describe('SqlliteViewerComponent', () => {
  let component: SqlliteViewerComponent;
  let fixture: ComponentFixture<SqlliteViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlliteViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlliteViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
