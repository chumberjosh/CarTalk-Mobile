import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockEventService } from '../_mocks/event.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    baseUrl = 'https://cartalktest.azurewebsites.net/api/events/';

    event: any

    constructor(private http: HttpClient, private mockEventService: MockEventService, private router: Router) { }

    eventDetailedId: number

    createEvent(model: any) {
        return this.http.post(this.baseUrl + 'create', model);
    }

    imGoing(event) {
        console.log(event)
    }

    learnMore(event) {
        this.mockEventService.getItem(event);
        console.log(event)
        this.event = event
        this.router.navigate(['/event-detailed/'])
    }

}
