import { Component, ReflectiveInjector } from '@angular/core';
import { RequestOptions, Headers, Http } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'file-upload',
  template: `
  <h1>Single File Upload</h1>
  <input type="file" (change)="fileChange($event)" placeholder="Upload file">
  <!--input type="file" (change)="fileChange($event)" placeholder="Upload file" accept=".pdf,.doc,.docx,.zip,.jpg"-->
  `,
})
export class FileComponent  {
    apiEndPoint : string;
    constructor(private http : Http){

        this.apiEndPoint = "http://localhost:4000/uploadFileData";

    }    
    
    fileChange(event:any){
        let fileList : FileList = event.target.files;
        if(fileList.length > 0){
            console.log("File upload works");
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('file', file, file.name);
            
            let headers = new Headers();
            this.http.post(`${this.apiEndPoint}`, formData)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                )
        } else if(fileList.length <= 0){
            console.log(fileList);
        }
    }    
}
