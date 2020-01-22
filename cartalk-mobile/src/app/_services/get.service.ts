import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetService {
    users: any
    user: any

    constructor(private http: HttpClient) { }

    getAny(url, item) {
        let baseUrl = 'http://10.0.2.2:5000/api/' + url + '/' + item
        this.http.get(baseUrl).subscribe(response => {
            this.user = response;
        })
    }

    userbyId(id) {
        this.getUsers();
        return this.users.filter((item) => item.id === id)[0];
    }

    getItem(id: number): User {
        return this.users.filter((item: { id: number; }) => item.id === id)[0];
    }

    getUsers() {
        let baseUrl = 'http://10.0.2.2:5000/api/users/'
        this.http.get(baseUrl).subscribe(response => {
            this.users = response;
        }, error => {
            console.log(error)
        });
    }

}
export class User {
    id: number;
    username: string;
    followers: number;
    following: number;
}
