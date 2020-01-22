import { Component, OnInit } from '@angular/core';
import { MockFriendsService } from '~/app/_mocks/friends.service';
import * as utils from "tns-core-modules/utils/utils";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-friend-detailed',
    templateUrl: './friend-detailed.component.html',
    styleUrls: ['./friend-detailed.component.css']
})
export class FriendDetailedComponent implements OnInit {
    constructor(private friendService: MockFriendsService, private router: RouterExtensions) { }
    friend: any;

    ngOnInit() {
        this.friend = this.friendService.friend
    }

    get canGoBack() {
        return this.router.canGoBack();
    }

    onGoBack() {
        this.router.backToPreviousPage();
    }

    goToUrl(url) {
        utils.openUrl('https://' + url);
    }

}
