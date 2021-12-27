import {Component, OnInit} from '@angular/core';
import {WarningComponent} from '../warning-component/warning.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  closeNav(): void {
    document.getElementById('myNav').style.height = '0%';
    document.getElementById('myNav').style.width = '0%';
  }

  public openWarning(): void {
    const dialogRef = this.dialog.open(WarningComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
