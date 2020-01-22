import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetService } from '~/app/_services/get.service';
import { GoToService } from '~/app/_services/go-to/go-to.service';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
registerElement("VideoPlayer", () => Video);

@Component({
    selector: 'ns-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    constructor(private http: HttpClient, private get: GetService, private goTo: GoToService) { }
    pageNumber = 1;
    baseUrl: any
    feeds: any
    userImg = '~/app/_assets/user.png'

    ngOnInit() {
        this.getFeed();
    }

    getFeed() {
        this.baseUrl = 'http://10.0.2.2:5000/api/feeds/' + '?pageNumber=' + this.pageNumber
        this.http.get(this.baseUrl).subscribe(response => {
            this.feeds = response;
            console.log(this.feeds)
        }, error => {
            console.log(error);
        });
    }

    nextPage() {
        this.pageNumber = this.pageNumber + 1
        console.log(this.pageNumber)
        this.getFeed()
        // if (this.feeds.length < 1) {
        //     console.log('empty')
        //     this.previousPage();
        // }
    }

    previousPage() {
        this.pageNumber = this.pageNumber - 1
        console.log(this.pageNumber)
        this.getFeed()
    }

    getUserById(item) {
        console.log(item)
        this.goTo.userId(item)
    }


}
