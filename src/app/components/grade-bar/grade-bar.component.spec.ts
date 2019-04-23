/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GradeBarComponent } from './grade-bar.component';

describe('GradeBarComponent', () => {
  let component: GradeBarComponent;
  let fixture: ComponentFixture<GradeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
