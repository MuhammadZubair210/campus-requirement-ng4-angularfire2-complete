import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanydashComponent } from './companydash.component';

describe('CompanydashComponent', () => {
  let component: CompanydashComponent;
  let fixture: ComponentFixture<CompanydashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
