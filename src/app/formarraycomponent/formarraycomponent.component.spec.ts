import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarraycomponentComponent } from './formarraycomponent.component';

describe('FormarraycomponentComponent', () => {
  let component: FormarraycomponentComponent;
  let fixture: ComponentFixture<FormarraycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarraycomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarraycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
