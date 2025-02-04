import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: "app-button-download",
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.style.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    @Input() fileUrl: string = '#';
    @Input() fileName: string = 'Download';
    
    downloadFile(fileName: string) {
        const filePath = `assets/files/${fileName}`;
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
