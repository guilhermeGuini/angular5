import { TestBed, inject } from '@angular/core/testing';

import { ProfessorService } from './professor.service';

describe('InstrutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessorService]
    });
  });

  it('should be created', inject([ProfessorService], (service: ProfessorService) => {
    expect(service).toBeTruthy();
  }));
});
