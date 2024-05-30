import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorNavComponent } from './tutor-nav.component';

describe('TutorNavComponent', () => {
  let component: TutorNavComponent;
  let fixture: ComponentFixture<TutorNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
