import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivePageService } from '~/app/_services/activePage.service';
import { UserService } from '~/app/_services/user.service';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { RouterExtensions } from 'nativescript-angular/router';
registerElement("VideoPlayer", () => Video);
// import {screen} from "platform"
import { screen } from "tns-core-modules/platform/platform"

import { FeedService } from '~/app/_mocks/feed.service';
import { EventService } from '~/app/_services/event.service';
import * as utils from "tns-core-modules/utils/utils";
import * as application from "tns-core-modules/application"
import { CommunityService } from '~/app/_services/community.service';
import { ItemDetailComponent } from '~/app/item/item-detail.component';
import { DetailedService } from '~/app/_services/detailed.service';
registerElement("VideoPlayer", () => Video);

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {

    constructor(private pageService: ActivePageService, private userService: UserService, private communityService: CommunityService
        , private router: RouterExtensions, private detailed: DetailedService) { }
    photoWidth: number = screen.mainScreen.widthDIPs * 0.33333;
    photoHeight: number = this.photoWidth;
    topSect: number = screen.mainScreen.heightDIPs * 0.2;
    modeSelectorHeight: number = screen.mainScreen.heightDIPs * 0.05;
    tenPercHeight: number = screen.mainScreen.heightDIPs * 0.1;
    ninetyPercWidth: number = screen.mainScreen.heightDIPs * 0.9;
    thirtyPercWidth: number = screen.mainScreen.heightDIPs * 0.3;

    viewMode: string

    currentUser = this.userService.currentUser
    currentUserId: number
    userImages = []
    wholeUser: any
    i: number
    user: any
    testUser = new Array<any>(
        {
            id: 1, username: 'CarTalk', bio: 'The official account for CarTalk! Keep up to date with everything going on with CarTalk here!',
            mainImg: '~/app/_assets/placeholders/cartalk.jpg', following: 17, followers: 3024
        }
    )



    modes = new Array<any>(
        { name: 'images' },
        { name: 'communities' },
        { name: 'products' },
    )

    testUserImages = new Array<any>(
        { id: 1, userId: 1, likes: 234, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 2, userId: 1, likes: 765, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 3, userId: 1, likes: 75, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/fnadojnxjnqml2buw4yq.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 4, userId: 1, likes: 132, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 5, userId: 1, likes: 523, type: "video", mainImg: 'no', src: 'https://res.cloudinary.com/demo/video/upload/w_250,h_250,c_fit/dog.mp4' }
    )
    joinedCommunities = new Array<any>(
        {
            id: 1, communityName: 'Mock Community 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it '
        },
        { id: 2, communityName: 'Mock Community 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 3, communityName: 'Mock Community 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 4, communityName: 'Mock Community 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 5, communityName: 'Mock Community 5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 6, communityName: 'Mock Community 6', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' }
    )
    testUserProducts = new Array<any>(
        { id: 1, userId: 1, price: 10, src: '~/app/_assets/generic/product-example.png' },
        { id: 2, userId: 1, price: 10, src: '~/app/_assets/generic/product-example.png' },
    )


    ngOnInit() {
        this.viewMode = 'images'
        // this.currentUserId = 1
        // this.getUserImages();
        // this.buildWholeUser()
    }

    ngOnDestroy() {
        this.pageService.profile = "~/app/_assets/nav-buttons/inactive/my-profile.png"
    }

    // getCurrentUserById() {
    //     this.currentUser = this.userService.getCurrentUserById(this.currentUserId)
    //     console.log('current user ' + JSON.stringify(this.currentUser[0]))
    //     console.log(JSON.stringify(this.currentUserId))
    // }

    // getUserImages() {
    //     this.getCurrentUserById()
    //     let userImages = this.userService.getCurrentUserImagesById(this.currentUserId)
    //     console.log(JSON.stringify(userImages))
    //     this.userImages = userImages
    // }

    // buildWholeUser() {
    //     this.wholeUser = this.userImages.concat(this.currentUser)
    //     this.i = this.wholeUser.length - 1
    //     console.log('whole user =' + JSON.stringify(this.wholeUser[this.i]))
    //     this.user = this.wholeUser[this.i]
    //     console.log('user ' + this.user)
    // }

    goToImage(item) {
        console.log(item)
    }

    goToCommunity(item) {
        // this.communityService.getCommunityById(item.id)
        this.router.navigate(['/communities/detailed/' + item.id])
    }

    switchViewMode(viewMode) {
        this.viewMode = viewMode
        console.log(this.viewMode)
    }

    viewImageDetailed(image) {
        this.router.navigate(['/view-image/' + image.id])
        this.detailed.image = image
    }

}
