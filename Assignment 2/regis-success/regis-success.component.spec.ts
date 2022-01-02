import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisSuccessComponent } from './regis-success.component';

describe('RegisSuccessComponent', () => {
  let component: RegisSuccessComponent;
  let fixture: ComponentFixture<RegisSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
