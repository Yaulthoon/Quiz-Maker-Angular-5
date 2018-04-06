import { TestBed, inject } from '@angular/core/testing';
import { QuestionCompilerService } from './question-compiler.service';

describe('QuestionCompilerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionCompilerService]
    });
  });

  it('should be created', inject([QuestionCompilerService], (service: QuestionCompilerService) => {
    expect(service).toBeTruthy();
  }));
});
