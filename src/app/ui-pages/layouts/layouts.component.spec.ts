import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutsCustomComponent } from './layouts.component';

describe('LayoutsCustomComponent', () => {
  let component: LayoutsCustomComponent;
  let fixture: ComponentFixture<LayoutsCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutsCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutsCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
