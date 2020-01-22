import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '~/app/_services/event.service';
import { MockEventService } from '~/app/_mocks/event.service';
import { LandingPageService } from '~/app/_services/landing-page.service';
import { MockFriendsService } from '~/app/_mocks/friends.service';
import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";
var view = require("ui/core/view");
// import * as Toast from 'nativescript-toast'

@Component({
    selector: 'ns-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    baseUrl = 'http://10.0.2.2:5000/api/events/';
    seachUrl = 'http://10.0.2.2:5000/api/events/search=Birmingham';
    events: any;
    loaded = true;
    query: string;
    mode: string = 'normal'
    public searchField = ''

    constructor(private http: HttpClient, private router: Router, private eventService: EventService,
        private mockEventService: MockEventService, private landingPage: LandingPageService,
        private friendService: MockFriendsService) { }

    ngOnInit() {
        this.getEvents()
    }

    getEvents() {
        this.http.get(this.baseUrl).subscribe(response => {
            this.events = response;
            // console.log(response)
        }, error => {
            console.log(error);
        });
    }

    getMockEvents() {
        // this.mockEventService.getItems();
        if (this.loaded === true) {
            this.events = this.mockEventService.events
        }
        else {
            console.log('events not loaded');
        }
    }

    search(query) {
        // let query = this.query
        console.log('query = ' + this.query)
        console.log(query)
        // const searchUrl = this.baseUrl + 'search/' + query
        // this.http.get(searchUrl).subscribe(response => {
        //     this.events = response;
        //     // console.log(response)
        // }, error => {
        //     console.log(error);
        // });
    }

    imGoing(event) {
        this.eventService.imGoing(event);
        // const imGoingToast = Toast.makeText('Thanks for letting us know!')
        // imGoingToast.show();
    }

    learnMore(event) {
        this.eventService.learnMore(event)
    }

    getUser(createdByUser) {
        let user = this.friendService.getItemByName(createdByUser);
        console.log(user)
        this.friendService.friend = user;
        this.router.navigate(['/friend-detailed'])
    }

    textChange($event) {
        console.log(this.query)
        // console.log($event)
    }

    onReturnPress(args) {
        let textField = <TextField>args.object;
        console.log(textField.text);
    }

    reset() {
        this.mode = 'search'
    }

}
