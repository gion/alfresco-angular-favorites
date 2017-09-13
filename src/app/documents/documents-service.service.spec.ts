import { TestBed, inject } from '@angular/core/testing';
import { Observable } from "rxjs/Rx";

import { DocumentsService, DocumentModel } from './index';

describe('DocumentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: DocumentsService, useValue: DocumentsServiceMock}
      ]
    });
  });

  it('should be created', inject([DocumentsService], (service: DocumentsService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return a new "DocumentModel" when calling `.toDocument`', inject([DocumentsService], (service: DocumentsService) => {
  //   let doc = service.toDocument({
  //     name: 'foo'
  //   });

  //   expect(doc instanceof DocumentModel).toBeTruthy();
  // }));
});

const DocumentsServiceMock = {
  getAll: () => Observable.of([
    new DocumentModel('folder'),
    new DocumentModel('file.txt')
  ])
}
