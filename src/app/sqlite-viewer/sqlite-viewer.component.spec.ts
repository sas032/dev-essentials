import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqliteViewerComponent } from './sqlite-viewer.component';

describe('SqliteViewerComponent', () => {
  let component: SqliteViewerComponent;
  let fixture: ComponentFixture<SqliteViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqliteViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqliteViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
