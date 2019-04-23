/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DidacticsComponent } from './didactics.component';

describe('DidacticsComponent', () => {
  let component: DidacticsComponent;
  let fixture: ComponentFixture<DidacticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidacticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidacticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
