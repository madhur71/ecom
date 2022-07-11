import { TestBed } from '@angular/core/testing';

import { ProductTypeListService } from './product-type-list.service';

describe('ProductTypeListService', () => {
  let service: ProductTypeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
