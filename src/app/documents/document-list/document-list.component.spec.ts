import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { DocumentListComponent, DocumentItemComponent } from '../index';
import { CatComponent } from '../../cat';

describe('DocumentListComponent', () => {
  let component: DocumentListComponent;
  let fixture: ComponentFixture<DocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        DocumentListComponent,
        DocumentItemComponent,
        CatComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should render a cat', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('cat')).toBeDefined();
  // });
});
