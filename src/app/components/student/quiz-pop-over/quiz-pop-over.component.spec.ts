import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPopOverComponent } from './quiz-pop-over.component';

describe('QuizPopOverComponent', () => {
  let component: QuizPopOverComponent;
  let fixture: ComponentFixture<QuizPopOverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizPopOverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizPopOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
