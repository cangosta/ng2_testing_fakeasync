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

  it('should pass', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(TestComponent).then( (fixture) => {
        fixture.detectChanges();
        expect(true).toBeTruthy();
    });
  }));

  it('should fail with message "Expected false to be truthy"', inject([TestComponentBuilder], fakeAsync((tcb) => {
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
