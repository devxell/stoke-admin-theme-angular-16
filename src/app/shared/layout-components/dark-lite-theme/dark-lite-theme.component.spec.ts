import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkLiteThemeComponent } from './dark-lite-theme.component';

describe('DarkLiteThemeComponent', () => {
  let component: DarkLiteThemeComponent;
  let fixture: ComponentFixture<DarkLiteThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkLiteThemeComponent]
    });
    fixture = TestBed.createComponent(DarkLiteThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
