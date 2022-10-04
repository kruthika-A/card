import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopcardComponent } from './loopcard.component';

describe('LoopcardComponent', () => {
  let component: LoopcardComponent;
  let fixture: ComponentFixture<LoopcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
