import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumasComponent } from './sumas.component';

describe('SumasComponent', () => {
  let component: SumasComponent;
  let fixture: ComponentFixture<SumasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SumasComponent]
    });
    fixture = TestBed.createComponent(SumasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
