import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineuserComponent } from './onlineuser.component';

describe('OnlineuserComponent', () => {
  let component: OnlineuserComponent;
  let fixture: ComponentFixture<OnlineuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineuserComponent]
    });
    fixture = TestBed.createComponent(OnlineuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
