import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTestPage } from './nav-test.page';

describe('NavTestPage', () => {
  let component: NavTestPage;
  let fixture: ComponentFixture<NavTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
