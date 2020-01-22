import { Injectable } from '@angular/core';
import { MockService } from '../_mocks/mock.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private mock: MockService) { }
    currentUser = {
        "Username": "Lola",
        "Gender": "female",
        "DateOfBirth": "1994-02-21",
        "Password": "password",
        "KnownAs": "Lola",
        "Created": "2017-08-02",
        "LastActive": "2017-08-02",
        "bio": "Nulla excepteur sit anim ex do qui laboris officia eiusmod ut incididunt. Enim occaecat sint dolor esse et enim. Ad cupidatat exercitation ea id eiusmod nostrud amet Lorem sint. Laboris cupidatat aute dolor ad eu tempor elit ea tempor quis et. Lorem eiusmod commodo cillum id aute nisi fugiat. Aute laborum tempor ullamco elit exercitation veniam commodo elit dolor.\r\n",
        "LookingFor": "Non do nostrud voluptate cupidatat et proident enim labore voluptate incididunt labore. Incididunt consectetur dolor proident nulla tempor et ipsum anim duis aute commodo duis. Est ullamco fugiat velit exercitation sunt enim duis nisi laborum culpa. Magna reprehenderit excepteur commodo nisi ullamco pariatur laboris. Ullamco fugiat eiusmod veniam duis elit. Cupidatat non occaecat consectetur sunt qui anim. In commodo in deserunt et veniam ad nulla.\r\n",
        "Interests": "Dolore nisi eiusmod ut irure ullamco nulla dolore est sit tempor quis.",
        "City": "Efland",
        "Country": "Burundi",
        "Followers": "354",
        "Following": "87643",
        "userPhoto": [
            {
                "photoUrl": "https://randomuser.me/api/portraits/women/3.jpg",
                "isMain": true,
                "description": "Non deserunt labore sunt ex laboris et adipisicing ullamco officia minim."
            }
        ]
    }

    userImages = this.mock.userImages
    users = this.mock.users
    singleUser: any
    images = new Array<any>(
        { id: 1, userId: 1, likes: 234, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 2, userId: 1, likes: 765, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 3, userId: 1, likes: 75, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/fnadojnxjnqml2buw4yq.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 4, userId: 1, likes: 132, type: "image", mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ' },
        { id: 5, userId: 1, likes: 523, type: "video", mainImg: 'no', src: 'https://res.cloudinary.com/demo/video/upload/w_250,h_250,c_fit/dog.mp4' }
    )

    getCurrentUserById(id) {
        return this.users.filter((item) => item.id === id)[0]
    }

    getCurrentUserImagesById(userId) {
        return this.userImages.filter((item) => item.userId === userId)
    }

    // returnCommunityById(communityId: Number) {
    //     return this.baseCommunity.filter((item) => item.id === communityId)
    // }
}
