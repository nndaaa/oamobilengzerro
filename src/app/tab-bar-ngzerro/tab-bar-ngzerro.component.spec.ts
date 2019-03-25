import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabBarNgzerroComponent } from './tab-bar-ngzerro.component';

describe('TabBarNgzerroComponent', () => {
  let component: TabBarNgzerroComponent;
  let fixture: ComponentFixture<TabBarNgzerroComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarNgzerroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabBarNgzerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
