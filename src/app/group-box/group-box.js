import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';

@Component({
  selector: 'group-box',
})
@View({
  templateUrl: './group-box.html',
  directives: [CORE_DIRECTIVES]
})
export class GroupBox {
}
