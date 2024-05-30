import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizClassComponent } from './quiz-class.component';

describe('QuizClassComponent', () => {
  let component: QuizClassComponent;
  let fixture: ComponentFixture<QuizClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
