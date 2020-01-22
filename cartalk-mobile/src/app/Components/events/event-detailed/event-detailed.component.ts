import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '~/app/_services/event.service';
import { HttpClient } from '@angular/common/http';
import { MockFriendsService } from '~/app/_mocks/friends.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-event-detailed',
    templateUrl: './event-detailed.component.html',
    styleUrls: ['./event-detailed.component.css']
})
export class EventDetailedComponent implements OnInit, OnDestroy {
    event: any;
    locationRevealed = false;
    todaysDate: any;

    constructor(private http: HttpClient, private eventService: EventService, private friendService: MockFriendsService,
        private router: RouterExtensions) { }

    eventId = this.eventService.eventDetailedId
    baseUrl = 'https://cartalktest.azurewebsites.net/api/events/id=' + this.eventId;

    ngOnInit() {
        // this.getEvents();
        // this.eventId = this.eventService.eventDetailedId
        this.event = this.eventService.event;
        console.log('eventDetailed' + this.event)
        // this.mockRevealFunc(this.event)
        console.log(this.locationRevealed)
    }

    ngOnDestroy() {
        this.eventId = 0
    }

    getEvents() {
        this.http.get(this.baseUrl).subscribe(response => {
            this.event = response;
            console.log(this.event)
        }, error => {
            console.log(error);
        });
    }

    getUser(createdByUser) {
        let user = this.friendService.getItemByName(createdByUser);
        console.log(user)
        this.friendService.friend = user;
        this.router.navigate(['/friend-detailed'])
    }

    imGoing(event) {
        this.eventService.imGoing(event);
        // const imGoingToast = Toast.makeText('Thanks for letting us know!')
        // imGoingToast.show();
    }

    learnMore(event) {
        this.eventService.learnMore(event)
    }

    revealLocation() {
        const utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
        console.log(utc);
        this.todaysDate = utc;
    }

    ifDateIsAfter(revealDate) {
        this.revealLocation();
        console.log(this.todaysDate)
        console.log('todays date', this.todaysDate);
        console.log('event reveal date', revealDate);
        // console.log(event.revealDate)
        if (this.todaysDate === revealDate) {
            // If todays date === event.reveal date, show info
            this.locationRevealed = true;
            console.log('true, need to show location on map');
        } if (this.todaysDate >= revealDate) {
            // event.showInfo = true;
            this.locationRevealed = true;
            console.log('true, need to show location on map');
        } else {
            // events.showInfo = false;
            this.locationRevealed = false;
            console.log('false');
        }
    }

    mockRevealFunc(event) {
        if (event.id === 1) {
            this.locationRevealed = true
        }
    }


    checkRevealDate(revealDate) {
        console.log(revealDate);
        this.ifDateIsAfter(revealDate);
    }

    viewOnMap(event) {
        this.router.navigate(['/map'])
    }
}
