import { Component, OnInit } from '@angular/core';
import { ActivePageService } from '~/app/_services/activePage.service';

@Component({
    selector: 'ns-main-view',
    templateUrl: './main-view.component.html',
    styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
    view: any
    activePage: any;

    constructor(private pageService: ActivePageService) { }

    ngOnInit() {
        this.activePage = this.pageService.activePage
    }

    checkView(view) {
        if (view === 'home') {
            this.activePage = 'home'
        } else if (view === 'profile') {
            this.activePage = 'profile'
        }
    }

}
