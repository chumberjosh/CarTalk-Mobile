import { Injectable } from '@angular/core';
import { MockService } from '../_mocks/mock.service';

@Injectable({
    providedIn: 'root'
})
export class CommunityService {

    constructor(private mock: MockService) { }
    baseCommunity = this.mock.communities;
    Posts = this.mock.mockPosts

    postReplies = this.mock.mockPostReply
    replies: any

    communityDetailedPosts: any;
    photo: any

    id: any

    getPostsByCommunityId(communityId: Number): any {
        this.communityDetailedPosts = this.Posts.filter((item) => item.communityId === communityId)
    }

    getCommunityById(communityId: Number) {
        this.baseCommunity = this.baseCommunity.filter((item) => item.id === communityId)
    }

    returnCommunityById(communityId: Number) {
        return this.baseCommunity.filter((item) => item.id === communityId)
    }

    getPostRepliesById(PostId: Number) {
        return this.postReplies.filter((item) => item.mockPostId === PostId)
    }

}
