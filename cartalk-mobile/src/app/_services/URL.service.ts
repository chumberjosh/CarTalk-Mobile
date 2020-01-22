import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class URLService {

    constructor() { }
    baseUrl = 'http://localhost:5000/api'

}
