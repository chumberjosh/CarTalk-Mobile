import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockFriendsService } from '~/app/_mocks/friends.service';
import { Router } from '@angular/router';
import { LandingPageService } from '~/app/_services/landing-page.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '~/app/_services/user.service';

@Component({
    selector: 'ns-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {

    constructor(public friendService: MockFriendsService, private router: Router,
        private landingPage: LandingPageService, private http: HttpClient, private userService: UserService) { }
    baseUrl = 'http://10.0.2.2:5000/api/users/'
    friends: any

    ngOnInit() {
        this.getAllUsers();
    }

    ngOnDestroy() {
        this.landingPage.friendsLoaded = false;
    }

    viewProfile(item) {
        // console.log(item);
        // this.friendService.friend = item;
        // this.router.navigate(['/friend-detailed'])
        let newUrl = this.baseUrl + item.id
        console.log(newUrl)
        this.http.get(newUrl).subscribe(response => {
            this.userService.singleUser = response;
            console.log(this.userService.singleUser)
            this.router.navigate(['/single-user/' + item.id])
        }, error => {
            console.log(error);
        });
    }

    getMockFeed() {
        console.log(this.landingPage.friendsLoaded)
        if (this.landingPage.friendsLoaded === true) {
            this.friends = this.friendService.friends
            console.log('friends loaded');
        }
        else {
            console.log('friends not loaded');
        }
    }

    getAllUsers() {
        this.http.get(this.baseUrl).subscribe(response => {
            this.friends = response;
            console.log(this.friends)
        }, error => {
            console.log(error);
        });
    }

    load() {
        // if (this.landingPage.loadFriendsPage === true) {
        // this.landingPage.friendsLoaded = true;
        // this.getMockFeed();
        // }
    }



}
