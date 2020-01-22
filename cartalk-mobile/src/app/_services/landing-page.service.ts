import { Injectable } from '@angular/core';
import { EventsComponent } from '../Components/events/events.component';
import { FeedComponent } from '../Components/landing-page/feed/feed.component';
import { FriendsComponent } from '../Components/friends/friends.component';

@Injectable({
    providedIn: 'root'
})
export class LandingPageService {
    eventsLoaded: any;
    feedLoaded: any;
    friendsLoaded = false;
    loadFriendsPage = false;

    constructor() { }

    loadFriends() {
        this.friendsLoaded = true;
    }

}
