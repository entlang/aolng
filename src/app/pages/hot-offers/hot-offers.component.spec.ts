import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotOffersComponent } from './hot-offers.component';

describe('HotOffersComponent', () => {
  let component: HotOffersComponent;
  let fixture: ComponentFixture<HotOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
