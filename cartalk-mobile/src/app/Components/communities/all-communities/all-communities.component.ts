import { Component, OnInit } from '@angular/core';
import { MockService } from '~/app/_mocks/mock.service';
import { CommunityService } from '~/app/_services/community.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-all-communities',
    templateUrl: './all-communities.component.html',
    styleUrls: ['./all-communities.component.css']
})
export class AllCommunitiesComponent implements OnInit {

    constructor(private mock: MockService, private communityService: CommunityService,
        private router: RouterExtensions) { }
    communities: any

    ngOnInit() {
        this.communities = this.mock.communities
    }

    goToCommunity(item) {
        this.router.navigate(['/communities/detailed/' + item.id])
        this.communityService.getPostsByCommunityId(item.id)
        this.communityService.getCommunityById(item.id)
        this.communityService.photo = item.photoUrl
    }

}
