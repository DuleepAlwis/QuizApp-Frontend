import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuizClassComponent } from './list-quiz-class.component';

describe('ListQuizClassComponent', () => {
  let component: ListQuizClassComponent;
  let fixture: ComponentFixture<ListQuizClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListQuizClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListQuizClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
