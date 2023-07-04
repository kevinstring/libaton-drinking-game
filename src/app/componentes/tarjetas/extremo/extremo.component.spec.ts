import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremoComponent } from './extremo.component';

describe('ExtremoComponent', () => {
  let component: ExtremoComponent;
  let fixture: ComponentFixture<ExtremoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtremoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
