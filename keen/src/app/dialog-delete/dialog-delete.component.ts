import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-delete',
  template: `
    <h1 md-dialog-title class="primary-color">Want To Delete <strong>{{ data.title}}</strong></h1>
    <md-dialog-content class="accent-color">
      Are you sure you want to delete this Note?
    </md-dialog-content>
    <md-dialog-actions>
        <button md-raised-button color="accent" md-dialog-close="delete" style="margin-right:20px;">Delete</button>
        <button md-raised-button color="primary" md-dialog-close="close">Close</button>        
    </md-dialog-actions>
  `,
  styles: []
})
export class DialogDeleteComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { 
  }

  ngOnInit() {

  }

}
