import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSideNavComponent } from './event-side-nav.component';

describe('EventSideNavComponent', () => {
  let component: EventSideNavComponent;
  let fixture: ComponentFixture<EventSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
