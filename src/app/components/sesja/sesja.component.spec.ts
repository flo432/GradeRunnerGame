import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesjaComponent } from './sesja.component';

describe('SesjaComponent', () => {
  let component: SesjaComponent;
  let fixture: ComponentFixture<SesjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
