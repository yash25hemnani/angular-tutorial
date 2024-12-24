import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLearningComponent } from './online-learning.component';

describe('OnlineLearningComponent', () => {
  let component: OnlineLearningComponent;
  let fixture: ComponentFixture<OnlineLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
