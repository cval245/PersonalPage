import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EmailFormComponent } from '../email-form/email-form.component';

import {EmailFormService} from '../email-form/email-form.service';
import { EmailSerService } from '../email-ser.service';
import { Mail } from '../mail.model';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    constructor(
        private bottomSheet: MatBottomSheet,
                public dialog: MatDialog,
                public emailFormService: EmailFormService,
                private emailServ: EmailSerService,
               ) {
        this.emailFormService.getSer().subscribe(data => this.sendEmail(data))
    }

    ngOnInit(): void {
    }

    openDialog(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.minHeight = '700px';

        let dialogRef = this.dialog.open(EmailFormComponent,
            dialogConfig
        )
    }

     openBottomSheet(): void{
         this.bottomSheet.open(ContactMeSheet)
     }

    sendEmail(data: Mail){
         console.log('data', data)
         this.emailServ.sendMail(data).subscribe()
     }

}

@Component({
    selector: 'app-contact-me',
    template: `<h2 mat-dialog-title>Phones are down!</h2>
<div mat-dialog-content class="mat-typography"><p>No offense, but I am not gonna give out my phone number, the email button works though.</p></div>

`,
    styleUrls: ['./home-page.component.scss']
})
 export class ContactMeSheet{
     constructor(private bottomSheetRef: MatBottomSheetRef<ContactMeSheet>,
                 ){}

 }
