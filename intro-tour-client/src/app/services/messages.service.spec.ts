import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('ErrorMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesService]
    });
  });

  it('should be created', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
