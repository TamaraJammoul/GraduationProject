import { Directive, HostBinding, Input, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { BaseComponent } from '../base-component/base-component';


@Directive({
    selector: '[appCardImagePlaceHolder]'
})

export class CardImagePlaceholderDirective extends BaseComponent implements OnInit {
    @Input() appCardImagePlaceHolder = '';

    @HostBinding('style.background-image')
    public backgroundImage!: SafeStyle;

    constructor(private element: ElementRef, private sanitizer: DomSanitizer) {
        super();
    }

    ngOnInit() {
        if (this.isEmpty(this.appCardImagePlaceHolder)) {
            this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
                'url(/assets/images/logo.png)');
            this.element.nativeElement.classList.add('card-image-placeholder');
        }
        else {
            this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle(
                'url(' + this.appCardImagePlaceHolder + ')');
            this.element.nativeElement.classList.add('card-image');
        }
    }
}
