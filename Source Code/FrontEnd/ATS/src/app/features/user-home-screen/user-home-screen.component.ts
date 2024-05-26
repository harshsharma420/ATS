import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from 'src/app/shared/UI components/title/title.component';
import { SubtitleComponent } from 'src/app/shared/UI components/subtitle/subtitle.component';
import { UserUploadButtonComponent } from 'src/app/shared/UI components/user-upload-button/user-upload-button.component';
import { OrComponent } from 'src/app/shared/UI components/or/or.component';

@Component({
  selector: 'app-user-home-screen',
  standalone: true,
  imports: [CommonModule , TitleComponent , SubtitleComponent , UserUploadButtonComponent , OrComponent],
  templateUrl: './user-home-screen.component.html',
  styleUrls: ['./user-home-screen.component.scss']
})
export class UserHomeScreenComponent {

}
