import { Component, OnInit } from '@angular/core';
import { ActivePageService } from '~/app/_services/activePage.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'ns-bottom-nav',
    templateUrl: './bottom-nav.component.html',
    styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

    constructor(private pageService: ActivePageService, private router: RouterExtensions) { }
    home = "~/app/_assets/nav-buttons/inactive/home.png"
    explore = "~/app/_assets/nav-buttons/inactive/explore.png"
    add = "~/app/_assets/nav-buttons/inactive/add.png"
    communities = "~/app/_assets/nav-buttons/inactive/communities.png"
    profile = "~/app/_assets/nav-buttons/inactive/my-profile.png"

    // home = "~/_assets/nav-buttons/inactive/home.png"
    // explore = "~/_assets/nav-buttons/inactive/explore.png"
    // add = "~/_assets/nav-buttons/inactive/add.png"
    // communities = "~/_assets/nav-buttons/inactive/communities.png"
    // profile = "~/_assets/nav-buttons/inactive/my-profile.png"

    ngOnInit() {
        // this.checkActivePage();
        this.goTo('home')
    }

    goTo(page) {
        // this.pageService.activePage = page

        this.router.navigate([page])

        // if (page === 'home') {
        //     this.home = "~/_assets/nav-buttons/active/" + page + ".png"
        //     this.explore = "~/_assets/nav-buttons/inactive/explore.png"
        //     this.add = "~/_assets/nav-buttons/inactive/add.png"
        //     this.communities = "~/_assets/nav-buttons/inactive/communities.png"
        //     this.profile = "~/_assets/nav-buttons/inactive/my-profile.png"
        //     this.pageService.activePage = 'home'
        // }
        // else if (page === 'my-profile') {
        //     this.profile = "~/app/_assets/nav-buttons/active/" + page + ".png"
        //     this.home = "~/app/_assets/nav-buttons/inactive/home.png"
        //     this.communities = "~/app/_assets/nav-buttons/inactive/communities.png"
        //     this.add = "~/app/_assets/nav-buttons/inactive/add.png"
        //     this.explore = "~/app/_assets/nav-buttons/inactive/explore.png"
        // }
        // else if (page === 'communities') {
        //     this.communities = "~/app/_assets/nav-buttons/active/" + page + ".png"
        //     this.home = "~/app/_assets/nav-buttons/inactive/home.png"
        //     this.profile = "~/app/_assets/nav-buttons/inactive/my-profile.png"
        //     this.explore = "~/app/_assets/nav-buttons/inactive/explore.png"
        //     this.add = "~/app/_assets/nav-buttons/inactive/add.png"
        // }
        // else if (page === 'explore') {
        //     this.explore = "~/app/_assets/nav-buttons/active/" + page + ".png"
        //     this.home = "~/app/_assets/nav-buttons/inactive/home.png"
        //     this.add = "~/app/_assets/nav-buttons/inactive/add.png"
        //     this.communities = "~/app/_assets/nav-buttons/inactive/communities.png"
        //     this.profile = "~/app/_assets/nav-buttons/inactive/my-profile.png"
        // }
        // else if (page === 'add') {
        //     this.add = "~/app/_assets/nav-buttons/active/" + page + ".png"
        //     this.home = "~/app/_assets/nav-buttons/inactive/home.png"
        //     this.explore = "~/app/_assets/nav-buttons/inactive/explore.png"
        //     this.communities = "~/app/_assets/nav-buttons/inactive/communities.png"
        //     this.profile = "~/app/_assets/nav-buttons/inactive/my-profile.png"
        // }
    }

}
