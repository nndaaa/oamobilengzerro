import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarNgzerroComponent } from './nav-bar-ngzerro.component';

describe('NavBarNgzerroComponent', () => {
  let component: NavBarNgzerroComponent;
  let fixture: ComponentFixture<NavBarNgzerroComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarNgzerroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarNgzerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
