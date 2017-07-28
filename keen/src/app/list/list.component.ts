import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ShareButton, ShareProvider } from 'ngx-sharebuttons';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { DialogDeleteComponent } from './../dialog-delete/dialog-delete.component';
import { DialogEditorComponent } from './../dialog-editor/dialog-editor.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  items = [];
  notes:Array<any>;
  template = "<h1><h1>";
  singleNote;

  constructor(
    private http: Http,
    public dialog: MdDialog,
    public snackBar: MdSnackBar,
  ) { }
  getNotes() {
    this.http.get('http://localhost:3000/api/Cards')
      .subscribe((res:Response)=> {
        this.notes = res.json();
      });
  }
  ngOnInit() {
    this.getNotes()
  }
  popsDel(noteID,noteTitle){
    let dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: '535px',      
      data: {
        id: noteID,
        title: noteTitle
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result === "delete"){
        this.http.delete('http://localhost:3000/api/Cards/' + noteID)
          .subscribe((res:Response)=> {
            if(res.status === 200) {
              this.snackBar.open("Note Successfully Deleted","",{
                duration: 5000,
              });
              this.getNotes();
            }
            
          });        
      }
    })
  }
  popsEdit(noteID){
    let dialogRef = this.dialog.open(DialogEditorComponent,{
      width: '735px',
      data: {
        id: noteID,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getNotes();
    });
  }
}

