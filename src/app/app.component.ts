import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  buttons = [
    { name: '()', operator: true },
    { name: '7', operator: false },
    { name: '8', operator: false },
    { name: '9', operator: false },
    { name: '/', operator: true },

    { name: '%', operator: true },
    { name: '4', operator: false },
    { name: '5', operator: false },
    { name: '6', operator: false },
    { name: '*', operator: true },

    { name: '<', operator: true },
    { name: '1', operator: false },
    { name: '2', operator: false },
    { name: '3', operator: false },
    { name: '-', operator: true },

    { name: 'C', warning: true },
    { name: '0', operator: false },
    { name: '.', operator: false },
    { name: '=', operator: true },
    { name: '+', operator: true }
  ];
}
