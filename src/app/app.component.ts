import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileList1: string[];
  fileList2: string[];

  setFileList(event: FileList) {
    console.log(event);
    this.fileList1 = Array.from(event).map(f => f.name);
  }

  setFileList2(event: FileList) {
    this.fileList2 = Array.from(event).map(f => f.name);
  }
}
