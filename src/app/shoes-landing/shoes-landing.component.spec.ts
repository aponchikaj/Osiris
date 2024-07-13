import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesLandingComponent } from './shoes-landing.component';

describe('ShoesLandingComponent', () => {
  let component: ShoesLandingComponent;
  let fixture: ComponentFixture<ShoesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoesLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
