import { TestBed, inject } from '@angular/core/testing';

import { NoteDeFraisService } from './note-de-frais.service';

describe('NoteDeFraisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteDeFraisService]
    });
  });

  it('should be created', inject([NoteDeFraisService], (service: NoteDeFraisService) => {
    expect(service).toBeTruthy();
  }));
});
