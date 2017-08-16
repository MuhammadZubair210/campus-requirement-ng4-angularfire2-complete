import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincompanyComponent } from './logincompany.component';

describe('LogincompanyComponent', () => {
  let component: LogincompanyComponent;
  let fixture: ComponentFixture<LogincompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
