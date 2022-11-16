import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCreateData } from 'src/app/core/models/board.model';
import { EDialogEvents } from 'src/app/core/models/enums';

@Component({
  selector: 'app-dialog-column',
  templateUrl: './dialog-column.component.html',
  styleUrls: ['./dialog-column.component.scss'],
})
export class DialogColumnComponent implements OnInit {
  public form = new FormGroup({
    title: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.required,
    ]),
  });

  constructor(
    public dialog: MatDialogRef<DialogColumnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCreateData,
  ) {}

  ngOnInit(): void {}

  getData() {
    console.log(this.data);
  }

  cancel(): void {
    this.dialog.close({ event: EDialogEvents.cancel });
  }
}
