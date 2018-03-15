import { Component,OnInit } from '@angular/core';
import { notes_service } from './notes.service';
import { Notes } from './notes';
import { NotesRes } from './notesres';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[notes_service]
})
export class AppComponent implements OnInit {

  notes: Notes[];
  constructor (private notes_service:notes_service){};
  ngOnInit():void{
    this.notes_service.getNotesByPrcsInstncID().subscribe(notesdata => {
      this.notes = notesdata.notes;
      console.log(this.notes);            
    },
      err => {
        console.log('An error has occured while retreving Notes data');
      })
     

  }
}
