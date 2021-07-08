import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DownloadService } from '../download.service';
import { EmailFormComponent } from '../email-form/email-form.component';

import { EmailFormService } from '../email-form/email-form.service';
import { EmailSerService } from '../email-ser.service';
import { Mail } from '../mail.model';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    @ViewChild("dialogRef") dialogRef: TemplateRef<any>;

    constructor(
        private bottomSheet: MatBottomSheet,
        public dialog: MatDialog,
        public emailFormService: EmailFormService,
        private emailServ: EmailSerService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private downloadSer: DownloadService,
    ) {
        this.matIconRegistry.addSvgIcon(
            "github",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/github.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "django",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/django.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "angular",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/angular.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "postgres",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/postgres.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "rxjs",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/rxjs.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "ngrx",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/ngrx.svg")
        )
        this.matIconRegistry.addSvgIcon(
            "drf",
            this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/drf.svg")
        )

        this.emailFormService.getSer().subscribe(data => this.sendEmail(data))
    }

    ngOnInit(): void {
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.minHeight = '700px';

        let dialogRef = this.dialog.open(EmailFormComponent,
            dialogConfig
        )
    }
    openImageModal(imgAddress: string) {
        const imgModal = new MatDialogConfig()
        imgModal.maxWidth = '80%';
        imgModal.maxHeight = window.innerHeight + 'px';//80%';
        imgModal.data = imgAddress;
        this.dialog.open(this.dialogRef, imgModal)
    }

    openBottomSheet(): void {
        this.bottomSheet.open(ContactMeSheet)
    }

    sendEmail(data: Mail) {
        this.emailServ.sendMail(data).subscribe()
    }
    download(){
        this.downloadSer.download().subscribe(data =>{
            let url = window.URL.createObjectURL(data)
            let pwa = window.open(url);
            if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
        })
    }
}

@Component({
    selector: 'app-contact-me',
    template: `<h2 mat-dialog-title>Phones are down!</h2>
<div mat-dialog-content class="mat-typography"><p>No offense, but I am not gonna give out my phone number, the email button works though.</p></div>

`,
    styleUrls: ['./home-page.component.scss']
})
export class ContactMeSheet {
    constructor(private bottomSheetRef: MatBottomSheetRef<ContactMeSheet>,
    ) { }

}
