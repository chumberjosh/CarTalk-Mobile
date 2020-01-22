import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '~/app/_services/event.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ns-create-event',
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
    model: any = {
        eventLat: Input,
        eventLng: Input,
        title: Input,
        hostName: Input,
        address: Input,
        location: Input,
        date: Input,
        revealDate: Input,
        time: Input,
        description: Input,
        photoUrl: Input
    };

    constructor(private eventService: EventService, private router: Router) { }

    ngOnInit() {
    }

    createEvent(lat,lng,title,hostName) {
        const model = {lat,lng,title,hostName}
        console.log('model ->', model)
        console.log('this.model ->', this.model)
        // this.eventService.createEvent(model).subscribe(() => {
        //     console.log(model)
        // }, error => {
        //     console.log(error);
        // });
    }


}
