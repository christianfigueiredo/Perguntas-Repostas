import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionariosComponent } from './questionarios.component';

describe('QuestionariosComponent', () => {
  let component: QuestionariosComponent;
  let fixture: ComponentFixture<QuestionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionariosComponent]
    });
    fixture = TestBed.createComponent(QuestionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
