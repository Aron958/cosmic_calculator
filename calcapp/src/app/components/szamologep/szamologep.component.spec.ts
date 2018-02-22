import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzamologepComponent } from './szamologep.component';

describe('SzamologepComponent', () => {
  let component: SzamologepComponent;
  let fixture: ComponentFixture<SzamologepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzamologepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzamologepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
