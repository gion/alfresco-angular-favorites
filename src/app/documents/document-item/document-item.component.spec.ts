import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from '@angular/material';

import { DocumentItemComponent } from './index';

describe('DocumentItemComponent', () => {
  // let component: DocumentItemComponent;
  let testComponent: TestWrapperComponent;
  let compiled: any;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [
        DocumentItemComponent,
        TestWrapperComponent,
        TestWrapperComponent2
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

  // it('should display the document name from input', () => {
  //   expect(compiled.innerText).toBe('document sample name');
  // });

  it('should display the document name from input', () => {
    expect(compiled.querySelector('md-card-title > span').innerText).toBe(testComponent.name);
  });

  it('should display the folder icon', () => {
    expect(compiled.querySelector('md-icon').innerText).toBe('folder');
  })

  it('should display the file icon', () => {
    let fixture = TestBed.createComponent(TestWrapperComponent2);
    let compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
    expect(compiled.querySelector('md-icon').innerText).toBe('insert_drive_file');
  })
});

@Component({
  selector: 'test-wrapper',
  template: '<document-item [name]=name></document-item>',
})
class TestWrapperComponent {
  name = 'sample name'
}

@Component({
  selector: 'test-wrapper2',
  template: '<document-item [name]=name></document-item>',
})
class TestWrapperComponent2 {
  name = 'sample.txt'
}
