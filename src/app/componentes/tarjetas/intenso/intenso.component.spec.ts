import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntensoComponent } from './intenso.component';

describe('IntensoComponent', () => {
  let component: IntensoComponent;
  let fixture: ComponentFixture<IntensoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntensoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntensoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
