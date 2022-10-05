import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmodelComponent } from './confirmodel.component';

describe('ConfirmodelComponent', () => {
  let component: ConfirmodelComponent;
  let fixture: ComponentFixture<ConfirmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
