import { Component, OnInit } from '@angular/core';

import { DocumentsService } from '../documents-service.service'

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents = []

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documentsService
      .getAll()
      .subscribe(docs => this.documents = docs)
  }
}
