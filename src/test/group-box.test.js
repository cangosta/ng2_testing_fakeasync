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
import { GroupBox } from '../app/group-box/group-box.js';

@Component({
  template: '',
  directives: [GroupBox]
})
class TestComponent {
}

describe('group-box control', () => {

  //'should raise expanded event on title click when it is expandable and it is collapsed'
  it('should fail', inject([TestComponentBuilder], fakeAsync((tcb) => {
    var fixture;

    // tcb.overrideTemplate(TestComponent, '<group-box id="identifier"></group-box>')
    tcb.createAsync(TestComponent).then((rootFixture) => {
        fixture = rootFixture;
      });

    tick();

    fixture.detectChanges();

    expect(false).toBeTruthy();

  })));

});
