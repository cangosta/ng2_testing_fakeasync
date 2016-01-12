import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  fakeAsync,
  TestComponentBuilder,
  tick
} from 'angular2/testing';

import { Component } from 'angular2/core';

import { GroupBox, GroupBoxHeader } from '../app/group-box/group-box.js';

@Component({
  template: '',
  directives: [GroupBox, GroupBoxHeader]
})
class TestComponent {
  expandedCallback() {
    this.expandedCalled = true;
  }
  collapsedCallback() {
    this.collapsedCalled = true;
  }
}

describe('group-box control', () => {

  //'should raise expanded event on title click when it is expandable and it is collapsed'
  it('testing...', inject([TestComponentBuilder], fakeAsync((tcb) => {
    var fixture;

    //tcb.overrideTemplate(TestComponent, '<group-box [isExpandable]="true" [isExpanded]="false" (expanded)="expandedCallback($event)"><group-box-header>Title Content</group-box-header>Body Content</group-box>')
    var res = tcb.createAsync(TestComponent).then((rootFixture) => {
        fixture = rootFixture;
      });

    tick();

    fixture.detectChanges();
    var element = fixture.debugElement.componentInstance;
    var compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('.group-box-header').click();

    tick();
    fixture.detectChanges();
    expect(element.expandedCalled).toBeFalsy();


  })));

});
