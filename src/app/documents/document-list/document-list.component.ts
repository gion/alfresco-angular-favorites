import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents = []

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.documents = [
        'document-1.ts',
        'folder',
        'file.xls',
        'sample.txt',
        'other folder',
        'README.md'
      ]
    }, 3000)
  }
}
