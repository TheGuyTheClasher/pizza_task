import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
// import { Component,  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { object: Object }, public dialog_ref: MatDialogRef<DetailsComponent>) { }

  ngOnInit(): void {
  }


  close() {
    this.dialog_ref.close("Done");
  }
}
