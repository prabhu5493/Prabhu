import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  upload(files: File[]){
    this.uploadAndProgress(files);
  }

  uploadAndProgress(files: File[]){
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file',f))
    
    this.http.post('https://file.io', formData)
      .subscribe(event => { console.log(event)
      alert('Uploaded Sucessfully..!!');
    });
  }


}
