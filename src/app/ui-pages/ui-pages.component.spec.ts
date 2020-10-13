import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIPagesComponent } from './ui-pages.component';

describe('UIPagesComponent', () => {
  let component: UIPagesComponent;
  let fixture: ComponentFixture<UIPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
