import { TestBed, inject } from '@angular/core/testing';

import { ConnexionService } from './connexion.service';

describe('ConnexionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnexionService]
    });
  });

  it('should be created', inject([ConnexionService], (service: ConnexionService) => {
    expect(service).toBeTruthy();
  }));
});
