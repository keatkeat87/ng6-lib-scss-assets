import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
// // const moment = require('moment');
// console.log(moment);

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
