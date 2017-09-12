import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentItemComponent } from './index';

describe('DocumentItemComponent', () => {
  // let component: DocumentItemComponent;
  let testComponent: TestWrapperComponent;
  let compiled: HTMLBaseElement;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocumentItemComponent,
        TestWrapperComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    testComponent = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });

  it('should display the document name from input', () => {
    expect(compiled.innerText).toBe('document sample name');
  });
});

@Component({
  selector: 'test-wrapper',
  template: '<document-item [name]=name></document-item>',
})
class TestWrapperComponent {
  name = 'sample name'
}
