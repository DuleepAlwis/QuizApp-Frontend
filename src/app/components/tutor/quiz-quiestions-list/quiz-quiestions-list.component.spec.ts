import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuiestionsListComponent } from './quiz-quiestions-list.component';

describe('QuizQuiestionsListComponent', () => {
  let component: QuizQuiestionsListComponent;
  let fixture: ComponentFixture<QuizQuiestionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuiestionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuiestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
