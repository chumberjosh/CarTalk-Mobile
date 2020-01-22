import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MockEventService {
    events = new Array<any>(
        {
            id: 1,
            title: "Birmingham Mock Event 1",
            location: "Birmingham",
            hostName: "Ter Stegen",
            address: "Asda Queslett",
            createdBy: "Ter Stegen",
            createdById: "4",
            photoUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/53D6/production/_106026412_carsbradford.jpg",
            eventLat: 1,
            eventLng: 1,
            date: "25/12/2019",
            time: "21:00",
            description: "CarTalk Mock Event",
            extraInfo: null,
            timeCreated: null,
            revealdate: "01/12/2019",
            imGoing: 0,
            imInterested: 0,
        },
        {
            id: 2,
            title: "London Mock Event 1",
            location: "London",
            hostName: "CarTalk",
            address: "Asda Queslett",
            createdBy: "CarTalk",
            photoUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/53D6/production/_106026412_carsbradford.jpg",
            eventLat: 1,
            eventLng: 1,
            date: "25/12/2019",
            time: "21:00",
            description: "CarTalk Mock Event",
            extraInfo: null,
            timeCreated: null,
            revealdate: "25/12/2019",
            imGoing: 0,
            imInterested: 0,
            createdById: "1",
        },
        {
            id: 3,
            title: "Manchester Mock Event 1",
            location: "Manchester",
            hostName: "CarTalk",
            address: "Asda Queslett",
            createdBy: "CarTalk",
            photoUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/53D6/production/_106026412_carsbradford.jpg",
            eventLat: 1,
            eventLng: 1,
            date: "25/12/2019",
            time: "21:00",
            description: "CarTalk Mock Event",
            extraInfo: null,
            timeCreated: null,
            revealdate: "01/12/2019",
            imGoing: 0,
            imInterested: 0,
        },
        {
            id: 4,
            title: "Wales Mock Event 1",
            location: "Wales",
            hostName: "CarTalk",
            address: "Asda Queslett",
            createdBy: "CarTalk",
            photoUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/53D6/production/_106026412_carsbradford.jpg",
            eventLat: 1,
            eventLng: 1,
            date: "25/12/2019",
            time: "21:00",
            description: "CarTalk Mock Event",
            extraInfo: null,
            timeCreated: null,
            revealdate: "01/12/2019",
            imGoing: 0,
            imInterested: 0,
        },
        {
            id: 5,
            title: "Leeds Mock Event 1",
            location: "Leeds",
            hostName: "CarTalk",
            address: "Asda Queslett",
            createdBy: "CarTalk",
            photoUrl: "https://ichef.bbci.co.uk/news/1024/branded_news/53D6/production/_106026412_carsbradford.jpg",
            eventLat: 1,
            eventLng: 1,
            date: "25/12/2019",
            time: "21:00",
            description: "CarTalk Mock Event",
            extraInfo: null,
            timeCreated: null,
            revealdate: "01/12/2019",
            imGoing: 0,
            imInterested: 0,
        }
    );

    // events = new Array<any>(
    //     {
    //         id: 1,
    //         title: "test"
    //     }
    // )

    constructor() { }

    getItems(): Array<Event> {
        return this.events;
    }

    getItem(id: number): Event {
        return this.events.filter((item) => item.id === id)[0];
    }

}
export class Event {
    id: number;

    title: string;
    location: string;
    hostName: string;
    address: string;

    createdBy: string;

    photoUrl: string;

    eventLat: number;
    eventLng: number;

    date: string;
    time: string;
    description: string;

    extraInfo: string;
    timeCreated: String;
    revealdate: string;

    imGoing: number;
    imInterested: number;
}
