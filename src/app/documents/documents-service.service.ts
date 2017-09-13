import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

import { DocumentModel } from './index';

@Injectable()
export class DocumentsService {

  private baseUrl: string = 'http://jsonplaceholder.typicode.com';

  constructor(private http: Http) {}

  getAll(): Observable<DocumentModel[]> {
    return this.http
      .get(`${this.baseUrl}/albums`)
      .map(res => this.mapDocuments(res))
      .catch(this.handleError)
  }

  mapDocuments(response: Response): DocumentModel[] {
    return response.json().map(this.toDocument)
  }

  handleError(error: any) {
    let errorMsg = error.message || 'oops! we seem to have an issue contacting the server!'
    console.error('documents service error', errorMsg)

    return Observable.throw(errorMsg);
  }

  toDocument(doc: any): DocumentModel {
    let shouldConvertToFile = Math.random() > 0.5

    let name = doc.title

    // fake it
    // force the document to be a file
    if (shouldConvertToFile) {
      name += '.txt'
    }

    return new DocumentModel(name)
  }

}
