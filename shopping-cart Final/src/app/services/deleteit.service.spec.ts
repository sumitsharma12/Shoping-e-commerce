import { TestBed } from '@angular/core/testing';

import { DeleteitService } from './deleteit.service';

describe('DeleteitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteitService = TestBed.get(DeleteitService);
    expect(service).toBeTruthy();
  });
});
