import { Injectable } from '@angular/core';
import { MockFriendsService } from './friends.service';
import { EventService } from '../_services/event.service';

@Injectable({
    providedIn: 'root'
})
export class JoiningService {

    constructor(private friendService: MockFriendsService, private eventService: EventService) { }

    getFriendEvents(eventCreatedById, friendId) {
        

        if (eventCreatedById === friendId) {
            console.log('match')
        }
    }

}

// if friendId === event.createdById -> console.log('works')
