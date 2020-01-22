import { Component, OnInit } from '@angular/core';
import { DetailedService } from '~/app/_services/detailed.service';
import { RouterExtensions } from 'nativescript-angular/router';
import * as utils from "tns-core-modules/utils/utils";
import { MockService } from '~/app/_mocks/mock.service';
import { HttpClient } from '@angular/common/http';
import { GoToService } from '~/app/_services/go-to/go-to.service';

@Component({
    selector: 'ns-view-image',
    templateUrl: './view-image.component.html',
    styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {

    constructor(private detailed: DetailedService, private router: RouterExtensions, private mock: MockService,
        private http: HttpClient, private goTo: GoToService) { }
    baseUrl = 'http://10.0.2.2:5000/api/users/';
    image: any
    user: any;
    similarImages: any

    ngOnInit() {
        this.image = this.detailed.image
        // this.getUser()
        this.user = this.detailed.user;
    }

    // getUser() {
    //     this.http.get(this.baseUrl + this.image.userId).subscribe(response => {
    //         this.user = response;
    //         console.log(response)
    //     }, error => {
    //         console.log(error);
    //     });
    // }

    get canGoBack() {
        return this.router.canGoBack();
    }
    onGoBack() {
        this.router.backToPreviousPage();
    }
    likeItem() {
        this.image.likes = this.image.likes + 1;
    }
    goToUser(user) {
        this.goTo.user(user)
    }




}
