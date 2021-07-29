import { Inject, Injectable } from '@angular/core';
import { DOCUMENT_REF, WINDOW_REF } from '@core/services/common.settings';

@Injectable()
export class FileExtensions {

  constructor(@Inject(WINDOW_REF) private winRef: any, @Inject(DOCUMENT_REF) private documentRef: any) { }

  openFile(response: Blob): void {
    const fileURL = URL.createObjectURL(response);
    this.winRef.open(fileURL);
  }

  downloadFile(response: Blob, fileName: string): void {
    if (this.isMicrosoftBrowser()) {
      this.winRef.navigator.msSaveBlob(response, fileName);
    } else {
      this.createDownloadLink(response, fileName);
    }
  }
  private isMicrosoftBrowser(): boolean {
    const ieEDGE = this.winRef.navigator.userAgent.match(/Edge/g);
    const ie = this.winRef.navigator.userAgent.match(/.NET/g); // IE 11+
    const oldIE = this.winRef.navigator.userAgent.match(/MSIE/g);
    return ie || oldIE || ieEDGE;
  }
  private createDownloadLink(response: Blob, fileName: string): void {
    const link = this.documentRef.createElement('a');
    if (link) {
      link.href = this.winRef.URL.createObjectURL(response);
      link.download = fileName;
      this.documentRef.body.appendChild(link);
      link.click();
      this.winRef.setTimeout(() => {
        this.documentRef.body.removeChild(link);
      }, 1000);
    }
  }

}
