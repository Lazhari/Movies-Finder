/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieComponent } from './serie.component';

describe('SerieComponent', () => {
  let component: SerieComponent;
  let fixture: ComponentFixture<SerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
