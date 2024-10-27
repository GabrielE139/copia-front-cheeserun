import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonVerticalComponent } from './boton-vertical.component';

describe('BotonVerticalComponent', () => {
  let component: BotonVerticalComponent;
  let fixture: ComponentFixture<BotonVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
