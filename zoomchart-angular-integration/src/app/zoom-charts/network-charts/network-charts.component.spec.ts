import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkChartsComponent } from './network-charts.component';

describe('NetworkChartsComponent', () => {
  let component: NetworkChartsComponent;
  let fixture: ComponentFixture<NetworkChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
