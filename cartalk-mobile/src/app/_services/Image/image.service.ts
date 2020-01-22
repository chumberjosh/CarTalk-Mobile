import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {

    constructor() { }
    image: any

    viewImage(image) {
        this.image = image
    }

}
