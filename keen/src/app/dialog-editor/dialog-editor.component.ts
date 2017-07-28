import { Component, OnInit, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { MdSnackBar, MdDialog } from '@angular/material';

import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-editor',
  template: `
      <h1 md-dialog-title class="primary-color">Want To Delete <strong>{{ data.title}}</strong></h1>
      <md-dialog-content class="accent-color">
      <form class="example-form">
        <md-input-container class="lu-text-field lu-full-width">
          <input mdInput  [(ngModel)]="note.title" #message name="title" maxlength="256" placeholder="Create New Note" >
          <md-hint align="end">{{message.value.length}} / 256</md-hint>
        </md-input-container>
        <div class="lu-create-hidden-items">
          <h4>Content</h4>
          <md-input-container class="lu-textarea-field lu-full-width">
            <textarea mdInput [(ngModel)]="note.content" name="content" placeholder="Tell me some Details"></textarea>
          </md-input-container>
          <div>
            <h4>Change Color</h4>
            <br/>
            <md-radio-group  class="lu-radio-group" [(ngModel)]="note.color" name="color">
              <md-radio-button value="#8BC34A" class="lu-radio-item"><div class="lu-color-area" style="background-color:#8BC34A"></div></md-radio-button>
              <md-radio-button value="#80D8FF" class="lu-radio-item"><div class="lu-color-area" style="background-color:#80D8FF"></div></md-radio-button>
              <md-radio-button value="#F44336" class="lu-radio-item"><div class="lu-color-area" style="background-color:#F44336"></div></md-radio-button>
              <md-radio-button value="#FF9800" class="lu-radio-item"><div class="lu-color-area" style="background-color:#FF9800"></div></md-radio-button>
            </md-radio-group>
          </div>
        </div>
        <div class="row lu-btn-actions">
          <div class="lu-actions col-md-6">
          </div>
          <div class="lu-submit col-md-6">
            <button type="submit" md-raised-button class="pull-right lu-add-btn" (click)="updateNote(note)" md-dialog-close="{{msgNote}}">Submit</button>
            <button type="submit" md-raised-button class="pull-right lu-cancel-btn" md-dialog-close="close">Cancel</button>
          </div>
        </div>        
      </form>
      </md-dialog-content>
  `,
  styles: []
})
export class DialogEditorComponent implements OnInit {
  note = {};
  msgNote = "";
  colorSelector = false;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private http: Http,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
  ) { }

  getSingleNote(noteID:string){
    this.http.get('http://localhost:3000/api/Cards/'+ noteID)
      .subscribe((res:Response)=> {
        this.note = res.json();
      });
  }
  ngOnInit() {
    this.getSingleNote(this.data.id)
  }
  updateNote(noteData){
    this.http.put('http://localhost:3000/api/Cards/'+ noteData.id, noteData)
      .subscribe((res:Response)=> {
        if(res.status === 200) {
          this.msgNote = "Success";
          this.dialog.closeAll();
          this.snackBar.open("Note Successfully Updated","",{
            duration: 5000,
          });
        }
      });
  }
}
