import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedService } from '~/app/_mocks/feed.service';
import { EventService } from '~/app/_services/event.service';
import * as utils from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application"
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpClient } from '@angular/common/http';
registerElement("VideoPlayer", () => Video);

@Component({
    selector: 'ns-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {

    constructor(private mockFeedService: FeedService, private eventService: EventService
        , private router: RouterExtensions, private http: HttpClient) { }
    baseUrl = 'http://10.0.2.2:5000/api/feeds/'
    public isAndroid: boolean;
    public isIos: boolean;
    feeds: any;
    loaded = true
    today: '18/12/2019'
    show: any;
    start = 0
    end = 7

    ngOnInit() {
        if (application.ios) {
            this.isAndroid = false;
            this.isIos = true;
        } else if (application.android) {
            this.isAndroid = true;
            this.isIos = false;
        }

        this.getFeed();
        this.show = 'false'
        console.log(this.feeds)
    }

    ngOnDestroy() {
        this.feeds = null;
    }

    getFeed() {
        this.http.get(this.baseUrl).subscribe(response => {
            this.feeds = response;
            console.log(this.feeds)
        }, error => {
            console.log(error);
        });
    }

    getMockFeed() {
        if (this.loaded === true) {
            this.feeds = this.mockFeedService.feeds
        }
        else {
            console.log('feed not loaded');
        }
    }

    like(item) {
        console.log(item.likes)
        item.likes = item.likes + 1
        console.log(item.likes)
    }

    imGoing(event) {
        this.eventService.imGoing(event)
    }

    learnMore(event) {
        this.eventService.learnMore(event)
    }

    goToUrl(url) {
        utils.openUrl('https://' + url);
    }

    showFullQuality(item) {
        console.log('show full quality')
        item.show = 'true'
        console.log(item, item.show)
    }

    showVideo(url: string) {
        console.log(url)
    }

    loadVideoIOS() {
        this.router.navigate(['/video'])
    }

    nextPage() {
        this.start = this.start + 7
        this.end = this.end + 7
        // Create pagination in API, when you get to next page, do + 1 on the page number of the URL
        // e.g. baseUrl = cartalkapi.azuresites.net/api/feed/1
    }

    previousPage() {
        this.start = this.start - 7
        this.end = this.end - 7
    }

    // How to get specific feed for individual users
    // FRONT END
    // Create 2 functions in service, these functions will filter the feed to see which user
    // is following who (to see if the user is following the user that posted the feed), it will then get
    // the users ID and use that to filter through every feed item
    // and match the userID to the userID for the users following the user that posted that in the feed
}
