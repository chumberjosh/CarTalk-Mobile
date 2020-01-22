import { Component, OnInit } from '@angular/core';
import { MockService } from '~/app/_mocks/mock.service';

@Component({
    selector: 'ns-messages-detailed',
    templateUrl: './messages-detailed.component.html',
    styleUrls: ['./messages-detailed.component.css']
})
export class MessagesDetailedComponent implements OnInit {
    messages: any
    constructor(private mock: MockService) { }

    ngOnInit() {
        // this.messages = this.mock.getMessagesBySender('testSender')
        this.getCoversation()
        // console.log('message detailed ' + this.messages.message)
    }

    getCoversation() {
        this.messages = this.mock.getConversation('CarTalk', 'testSender')
    }

}
