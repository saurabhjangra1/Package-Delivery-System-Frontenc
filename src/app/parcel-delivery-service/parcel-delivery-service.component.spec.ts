import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelDeliveryServiceComponent } from './parcel-delivery-service.component';

describe('ParcelDeliveryServiceComponent', () => {
  let component: ParcelDeliveryServiceComponent;
  let fixture: ComponentFixture<ParcelDeliveryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelDeliveryServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelDeliveryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
