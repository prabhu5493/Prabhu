import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    HttpClientModule
  ]
})
export class FileUploadModule { }
