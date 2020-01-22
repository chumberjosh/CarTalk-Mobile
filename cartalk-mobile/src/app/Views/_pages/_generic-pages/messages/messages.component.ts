import { Component, OnInit } from '@angular/core';
import { MockService } from '~/app/_mocks/mock.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    constructor(private mock: MockService, private router: RouterExtensions) { }
    messages: any

    ngOnInit() {
        this.getMsgs()
    }

    getMsgs() {
        this.messages = this.mock.messages
        console.log(this.messages)
    }

    //   getNotifs() {
    //     this.notifications = this.mock.notifications
    //     console.log(this.notifications)
    //   }

    goToConversation(item) {
        if (item.readByUser === 'false') {
            item.readByUser = 'true'
        }
        this.router.navigate(['messages/detailed'])
        // console.log(item)
    }

}
