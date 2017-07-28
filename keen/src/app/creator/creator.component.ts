import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})

export class CreatorComponent implements OnInit {

  
  hiddenContent = false;
  note = {
    title:"",
    content:"",
    color:"#000",
    hasFiles:false,
    priority:1,
  };
  msgOk = false;
  colorSelector = false;

  constructor(
    private http: Http,
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    
  }
  focusFunction(){
    this.hiddenContent = true;
  }

  closeNotePad(){
    this.hiddenContent = false;
  }
  hiddenColorSelector(){
    this.colorSelector = !this.colorSelector;
  }
  addNote(){
    console.log(this.note);
    this.http.post('http://localhost:3000/api/Cards',this.note)
      .subscribe( (res:Response)=> {
        if(res.status == 200) {
          this.hiddenContent = false;
          this.snackBar.open("Note "+ res.json().title +" Successfully Created","",{
            duration: 2000,
          });
          window.location.reload();
        }
      })
  }
}
