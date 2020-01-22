import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunityService } from '~/app/_services/community.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'ns-community-detailed',
    templateUrl: './community-detailed.component.html',
    styleUrls: ['./community-detailed.component.css']
})
export class CommunityDetailedComponent implements OnInit, OnDestroy {
    baseUrl = ''
    constructor(private communityService: CommunityService, private http: HttpClient) { }
    posts: any
    photo: any
    baseCommunity: any;
    showReplies = 'false';
    replies: any;
    baseCommunityId: any;

    ngOnInit() {
        this.getCommunity(this.communityService.id)
        this.posts = this.communityService.communityDetailedPosts
        // this.baseCommunity = this.communityService.baseCommunity
        console.log(this.posts)
        // console.log(this.baseCommunity)
        this.getBaseCommunity();
    }

    ngOnDestroy() {
        this.posts = []
        this.photo = []
        // this.baseCommunity = []
        this.showReplies = 'false';
        this.replies = []
    }

    getCommunity(id) {
        this.http.get(this.baseUrl + '/' + id).subscribe(response => {
            this.baseCommunity = response;
            // console.log(response)
        }, error => {
            console.log(error);
        });
    }

    getReplies(item) {
        this.showReplies = 'true';
        console.log(this.showReplies)
        console.log(this.communityService.getPostRepliesById(item.id))
        this.replies = this.communityService.getPostRepliesById(item)
    }

    getBaseCommunity() {
        console.log('bc id ' + this.posts[0].communityId)
        this.baseCommunityId = this.posts[0].communityId
        this.baseCommunity = this.communityService.returnCommunityById(this.baseCommunityId)
        console.log(this.baseCommunity)
        // this.baseCommunity = baseCommunity
    }

    // HOW IT IS DONE
    // create a function to send the community id to a service
    // and then read the id from the service and get all the community
    // posts that match the community id from the id in the service so
    // it will display the community posts with communityIds that are
    // the same as the ID of the community that is tapped on

}
