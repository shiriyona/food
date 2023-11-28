import { Component } from '@angular/core';
import { useState, ChangeEvent } from "react";
 

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  MyComponent() {
    const [images, setImages] = useState<FileList | null>(null);
  
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        setImages(files);
      }
    }

  }

}
