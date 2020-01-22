import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MockFriendsService {
    friend: any;

    friends = new Array<any>(
        { id: 0, name: "CarTalk", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 1, name: "Ter Stegen", tagline: "Just your average car guy!", socialmedia: "www.youtube.com/terstegen", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 3, name: "Piqué", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 4, name: "I. Rakitic", tagline: "Just your average car guy!", socialmedia: "www.facebook.com/irakitic", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 5, name: "Sergio", tagline: "Just your average car guy!", socialmedia: "www.twitter.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 6, name: "Denis Suárez", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 7, name: "Arda", tagline: "Just your average car guy!", socialmedia: "www.facebook.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 8, name: "A. Iniesta", tagline: "Just your average car guy!", socialmedia: "www.twitter.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 9, name: "Suárez", tagline: "Just your average car guy!", socialmedia: "www.youtube.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 10, name: "Messi", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 11, name: "Neymar", tagline: "Just your average car guy!", socialmedia: "www.facebook.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 12, name: "Rafinha", tagline: "Just your average car guy!", socialmedia: "www.twitter.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 13, name: "Cillessen", tagline: "Just your average car guy!", socialmedia: "www.youtube.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 14, name: "Mascherano", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 17, name: "Paco Alcácer", tagline: "Just your average car guy!", socialmedia: "www.facebook.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 18, name: "Jordi Alba", tagline: "Just your average car guy!", socialmedia: "www.twitter.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 19, name: "Digne", tagline: "Just your average car guy!", socialmedia: "www.youtube.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 20, name: "Sergi Roberto", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 21, name: "André Gomes", tagline: "Just your average car guy!", socialmedia: "www.facebook.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 22, name: "Aleix Vidal", tagline: "Just your average car guy!", socialmedia: "www.twitter.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 23, name: "Umtiti", tagline: "Just your average car guy!", socialmedia: "www.youtube.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 24, name: "Mathieu", tagline: "Just your average car guy!", socialmedia: "www.instagram.com/cartalkapp", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" },
        { id: 25, name: "Masip", tagline: "Just your average car guy!", socialmedia: "www.facebook.com", bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident" }
    );

    constructor() { }

    getItems(): Array<Friend> {
        return this.friends;
    }

    getItem(id: number): Friend {
        return this.friends.filter((item) => item.id === id)[0];
    }

    getItemByName(name: string): Friend {
        return this.friends.filter((item) => item.name === name)[0];
    }

}
export class Friend {
    id: number;
    name: string;
    tagline: string;
    bio: string;
}
