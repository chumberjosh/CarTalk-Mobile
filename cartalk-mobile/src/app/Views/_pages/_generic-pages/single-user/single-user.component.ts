import { Component, OnInit } from '@angular/core';
import { UserService } from '~/app/_services/user.service';
import { screen } from "tns-core-modules/platform/platform"
import { ImageService } from '~/app/_services/Image/image.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { DetailedService } from '~/app/_services/detailed.service';

@Component({
    selector: 'ns-single-user',
    templateUrl: './single-user.component.html',
    styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

    constructor(private userService: UserService, private image: ImageService, private router: RouterExtensions,
        private detailed: DetailedService) { }
    user: any
    images: any
    photoWidth: number = screen.mainScreen.widthDIPs * 0.33333;
    photoHeight: number = this.photoWidth;
    topSect: number = screen.mainScreen.heightDIPs * 0.2;
    modeSelectorHeight: number = screen.mainScreen.heightDIPs * 0.05;
    tenPercHeight: number = screen.mainScreen.heightDIPs * 0.1;
    ninetyPercWidth: number = screen.mainScreen.heightDIPs * 0.9;
    thirtyPercWidth: number = screen.mainScreen.heightDIPs * 0.3;

    viewMode: string
    ngOnInit() {
        this.user = this.userService.singleUser
        this.images = this.userService.images
        console.log(this.user)
        this.viewMode = 'images'
    }

    modes = new Array<any>(
        { name: 'images' },
        { name: 'communities' },
        { name: 'products' },
    )

    switchViewMode(viewMode) {
        this.viewMode = viewMode
        console.log(this.viewMode)
    }

    viewImage(image) {
        this.image.viewImage(image)
        this.router.navigate(['/single-image/' + image.id])
    }

    viewImageDetailed(image) {
        this.router.navigate(['/view-image/' + image.id])
        this.detailed.image = image
        this.detailed.user = this.user
    }

}
