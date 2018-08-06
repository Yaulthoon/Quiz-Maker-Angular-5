import { TestBed, inject } from '@angular/core/testing';

import { QuizScorerService } from './quiz-scorer.service';

describe('QuizScorerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizScorerService]
    });
  });

  it('should be created', inject([QuizScorerService], (service: QuizScorerService) => {
    expect(service).toBeTruthy();
  }));
});
