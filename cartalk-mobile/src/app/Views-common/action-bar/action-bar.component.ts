import { Component, OnInit, Input } from '@angular/core';
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Page } from 'tns-core-modules/ui/page';
import { ButtonsService } from '~/app/_services/buttons.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { UiService } from '~/app/_services/ui.service';

@Component({
    selector: 'ns-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

    constructor(private page: Page, private buttons: ButtonsService, private router: RouterExtensions, private uiService: UiService) { }
    @Input() title: string;
    @Input() pageName: string;
    @Input() src: string;

    ngOnInit() {
    }


    onLoadedActionBar() {
        this.buttons.onLoadedActionBar();
    }

    get canGoBack() {
        return this.router.canGoBack();
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    get android() {
        return isAndroid;
    }

    onToggleMenu() {
        this.uiService.toggleDrawer();
    }

}
