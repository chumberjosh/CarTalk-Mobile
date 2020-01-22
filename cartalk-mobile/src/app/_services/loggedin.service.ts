import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoggedinService {
    loggedIn: string = 'false';

    constructor() { }

    // logIn() {
    //     this.loggedIn = true;
    // }

}
