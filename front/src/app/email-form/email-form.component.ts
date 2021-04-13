import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { ViewChild } from '@angular/core';
import {EmailFormService} from './email-form.service';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
    emailForm: FormGroup
    submitted: boolean ;
    call = true;

    constructor(public dialogRef: MatDialogRef<EmailFormComponent>,
                public emailFormService: EmailFormService) {
        this.emailForm = this.createFormGroup()
    }

    ngOnInit(): void {
        this.submitted = false;
    }

    @ViewChild('autosize')
    txtAreaAutosize: CdkTextareaAutosize;

    get f() {return this.emailForm.controls}

    createFormGroup(){
        return new FormGroup({
          //  personalData: new FormGroup({
                name: new FormControl('', Validators.required),
                company: new FormControl(),
            email_address: new FormControl('',
                                           [Validators.required,
                                           Validators.email]),
           // }),
            //email: new FormGroup({
                subject: new FormControl('', Validators.required),
                content: new FormControl('', Validators.required),
            //})
        })
    }

    getErrorMessage(){
        console.log('get')
        if (this.f.email.hasError('required')){
            return 'You must enter a value';
        }
        console.log('sss')
        return this.f.email.hasError('email') ? 'Not a valid email':'';
    }

    close(){
        this.dialogRef.close()
    }

    onSubmit(){

        if (this.submitted == false){
        if(this.emailForm.valid) {
            console.log('email submit')
            this.submitted = true;
            this.emailFormService.setSer(this.emailForm.value)
            this.close()
            // go to saving service
            // upload to Observable
            // SetSer
        }
        }
    }

}
