import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeedService {
    feeds = new Array<any>(
        {
            id: 1,
            photoUrl: '~/app/_assets/placeholders/feed-1.png',
            createdBy: "CarTalk",
            caption: "The Subaru WRX, FastCars Car of the Year. This one is heavily modified and features a widebody kit and a huge drag wing!",
            likes: 7,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: '',
            link: '',
            show: 'false'
        },
        {
            id: 2,
            photoUrl: 'https://res.cloudinary.com/demo/video/upload/dog.jpg',
            videoUrl: 'https://res.cloudinary.com/demo/video/upload/w_250,h_250,c_fit/dog.mp4',
            createdBy: "CarTalk",
            caption: "Cloudinary Video Test usng 250x250 vid + thumbnail",
            likes: 7,
            dateCreated: "15/12/2019",
            type: "video",
            sponsored: '',
            link: '',
            show: 'false'
        },
        // {
        //     id: 3,
        //     photoUrl: '~/app/_assets/placeholders/img-2.jpg',
        //     createdBy: "BMW",
        //     caption: "The 2020 BMW M2 has just been revealed. The codenamed 'The Drift Machine' by BMW, I think we have alot to look forward to! Keep your eyes open for more info",
        //     likes: 49,
        //     dateCreated: "15/12/2019",
        //     type: "post",
        //     sponsored: "yes",
        //     link: 'https://www.google.com',
        //     show: 'true'
        // },
        {
            id: 4,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/cskqgzlwq4frrkxse0s8.jpg',
            createdBy: "CarTalk",
            caption: "TAP THE IMAGE TO VIEW THE VIDEO",
            likes: 14,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'
        },
        {
            id: 5,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/f_auto,q_70/ceahwjfixvledblj1vd0.jpg',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'
        },
        {
            id: 6,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/ar_270:300,c_fill,dpr_1.0,q_70,w_200/ucpo5q8yomby9r2tvvbn.jpg',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'
        },
        {
            id: 7,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/fnadojnxjnqml2buw4yq.jpg',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'

        },
        {
            id: 8,
            videoUrl: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "video",
            sponsored: "yes",
            link: 'www.google.com',
            show: 'false'
        },
        {
            id: 9,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'
        },
        {
            id: 10,
            photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg',
            createdBy: "CarTalk",
            caption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i",
            likes: 12,
            dateCreated: "15/12/2019",
            type: "post",
            sponsored: "",
            link: '',
            show: 'false'


        },
        // {
        //     id: 5,
        //     createdBy: "Mock Blogger 1",
        //     caption: "If a post has no image, it will be redesigned to look better. This is the current design! It should be an 'informational' post, other posts with images will have no type",
        //     likes: 99,
        //     dateCreated: "18/12/2019",
        //     timeCreated: "21:00",
        //     type: "post",
        //     sponsored: "",
        //     link: ''
        // }
    )

    constructor() { }

}
// export class Feed {
//     id: number;
//     photoUrl: string;
//     createdBy: string;
//     caption: string;
//     likes: number;
//     dateCreated: string;
//     type: string
// }
