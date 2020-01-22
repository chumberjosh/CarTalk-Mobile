import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivePageService } from '~/app/_services/activePage.service';
import { UiService } from '~/app/_services/ui.service';
import { LandingPageService } from '~/app/_services/landing-page.service';

@Component({
    selector: 'ns-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

    constructor(private pageService: ActivePageService, private uiService: UiService,
        private landingPage: LandingPageService) { }

    ngOnInit() {
        // this.pageService.activePage = 'home';
        // this.pageService.checkActivePage('home');
        console.log(this.pageService.activePage);
        // this.landingPage.loadEvents;
    }

    ngOnDestroy() {
        this.pageService.checkActivePage('');
    }

    loadFriends() {
        this.landingPage.loadFriendsPage = true;
    }

}
