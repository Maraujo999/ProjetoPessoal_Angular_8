import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSenacComponent } from './header-senac.component';

describe('HeaderSenacComponent', () => {
  let component: HeaderSenacComponent;
  let fixture: ComponentFixture<HeaderSenacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSenacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSenacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
