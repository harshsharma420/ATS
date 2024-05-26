import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-upload-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-upload-button.component.html',
  styleUrls: ['./user-upload-button.component.scss']
})
export class UserUploadButtonComponent {
  // @Input() task?: string;
  uploadFile(){
    console.log("File Uploaded Successfully");
  }
}
