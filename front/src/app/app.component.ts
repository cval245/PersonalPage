import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmailFormService } from './email-form/email-form.service';
import { EmailSerService } from './email-ser.service';
import { EmailFormComponent } from './email-form/email-form.component';
import { ContactMeSheet } from './home-page/home-page.component';
import { Mail } from './mail.model';
import { Subscription } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'personal-page';
    getSerSub: Subscription;
    constructor(
        private bottomSheet: MatBottomSheet,
        public dialog: MatDialog,
        public emailFormService: EmailFormService,
        private emailServ: EmailSerService,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer,
        private downloadSer: DownloadService,
    ){
        this.getSerSub = this.emailFormService.getSer().subscribe(data => {
            
            console.log('sdfsdfsdfsdfsdf')
            //this.sendLEmail(data)
        })
        this.matIconRegistry.addSvgIcon(
                "github-white",
                this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/github-white.svg")
            )
    }

    ngOnDestroy(){
        this.getSerSub.unsubscribe()
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.minHeight = '700px';

        let dialogRef = this.dialog.open(EmailFormComponent,
                                         dialogConfig
                                        )
    }

    openBottomSheet(): void{
        this.bottomSheet.open(ContactMeSheet)
    }

    sendLEmail(data: Mail){
        console.log('data', data)
        this.emailServ.sendMail(data).pipe(shareReplay()).subscribe(x => console.log(x))
    }
    download(){
        this.downloadSer.download().subscribe(data =>{
            console.log(data)
            let url = window.URL.createObjectURL(data)
            let pwa = window.open(url);
            if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
        })
    }
}
