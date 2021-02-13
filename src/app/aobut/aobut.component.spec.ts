import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AobutComponent } from './aobut.component';

describe('AobutComponent', () => {
  let component: AobutComponent;
  let fixture: ComponentFixture<AobutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AobutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AobutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
