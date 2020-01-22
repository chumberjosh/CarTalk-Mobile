import { Injectable } from '@angular/core';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page';

declare var android: any;

@Injectable({
    providedIn: 'root'
})
export class ButtonsService {

    constructor(private page: Page) { }

    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolbar = this.page.actionBar.nativeView;
            const backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor('#171717'),
                (<any>android.graphics).PorterDuff.Mode.SRC_ATOP)
            }
        }
    }


}
