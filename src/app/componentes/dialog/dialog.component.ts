import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [, MatButtonModule],
  
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  

}


