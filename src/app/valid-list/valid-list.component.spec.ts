import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidListComponent } from './valid-list.component';

describe('ValidListComponent', () => {
  let component: ValidListComponent;
  let fixture: ComponentFixture<ValidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
