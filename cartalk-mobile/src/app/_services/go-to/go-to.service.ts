import { Injectable } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Injectable({
    providedIn: 'root'
})
export class GoToService {

    constructor(private router: RouterExtensions, private http: HttpClient, private userService: UserService) { }
    Guser: any
    Gimage: any
    Suser: any
    Susers: any

    getUser(userId) {
        let baseUrl = 'http://10.0.2.2:5000/api/users/' + userId
        this.http.get(baseUrl).subscribe(response => {
            this.userService.singleUser = response;
            console.log(response)
        }, error => {
            console.log(error);
        });
    }

    user(user) {
        this.Guser = user
        console.log(user)
        console.log(this.Guser)
        this.router.navigate(['/single-user/' + user.id])
    }

    userId(userId) {
        console.log(userId)
        this.getUser(userId)
        this.router.navigate(['/single-user/' + userId])
    }

}
