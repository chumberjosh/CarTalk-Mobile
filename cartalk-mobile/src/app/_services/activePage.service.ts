import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ActivePageService {

    constructor() { }

    home = "~/_assets/nav-buttons/inactive/home.png"
    explore = "~/_assets/nav-buttons/inactive/home.png"
    upload = "~/_assets/nav-buttons/inactive/home.png"
    communities = "~/_assets/nav-buttons/inactive/home.png"
    profile = "~/_assets/nav-buttons/inactive/my-profile.png"


    checkActivePage(activePage) {
        console.log(activePage)
        if (activePage === 'home') {
            this.home = "~/_assets/nav-buttons/active/home.png"
        }
        else if (activePage === 'profile') {
            this.profile = "~/_assets/nav-buttons/active/home.png"
        }
        else if (activePage === 'upload') {
            this.home = "~/_assets/nav-buttons/active/upload.png"
        }
        else if (activePage === 'communities') {
            this.home = "~/_assets/nav-buttons/active/communities.png"
        }
        else (activePage === 'profile'); {
            this.home = "~/_assets/nav-buttons/active/home.png"
        };
    }

    activePage: any;

}
