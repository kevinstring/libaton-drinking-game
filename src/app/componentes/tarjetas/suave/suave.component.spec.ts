import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaveComponent } from './suave.component';

describe('SuaveComponent', () => {
  let component: SuaveComponent;
  let fixture: ComponentFixture<SuaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
