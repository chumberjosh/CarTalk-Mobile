import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MockService {
    users = new Array<any>(
        { id: 1, username: 'CarTalk', bio: 'The official account for CarTalk! Keep up to date with everything going on with CarTalk here!' }
    )

    userImages = new Array<any>(
        { id: 1, userId: 1, mainImg: 'yes', src: 'https://res.cloudinary.com/idemo/image/upload/f_auto,q_70/ceahwjfixvledblj1vd0.jpg' },
        { id: 2, userId: 1, mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg' },
        { id: 3, userId: 1, mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg' },
        { id: 4, userId: 2, mainImg: 'yes', src: 'https://res.cloudinary.com/idemo/image/upload/f_auto,q_70/ceahwjfixvledblj1vd0.jpg' },
        { id: 5, userId: 2, mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/fnadojnxjnqml2buw4yq.jpg' },
        { id: 6, userId: 2, mainImg: 'no', src: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg' }
    )

    notifications = new Array<any>(
        { id: 1, type: 'reminder', message: 'This is a reminder notification!' },
        { id: 2, type: 'warning', message: 'This is a warning notification!' },
        { id: 3, type: 'message', message: 'This is a message notification!' },
        { id: 4, type: 'error', message: 'This is a error notification!' },
    );

    messages = new Array<any>(
        { id: 1, senderName: 'CarTalk', recipientName: 'CarTalk', message: 'unread - test message', readByUser: 'false' },
        { id: 2, senderName: 'CarTalk', recipientName: 'testSender', message: 'unread - test message', readByUser: 'false' },
        { id: 3, senderName: 'CarTalk', recipientName: 'testSender', message: 'read - test message', readByUser: 'true' },
        { id: 4, senderName: 'testSender', recipientName: 'CarTalk', message: 'unread - test message', readByUser: 'false' },
    );

    communities = new Array<any>(
        { id: 1, communityName: 'Mock Community 1', photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', location: 'Birmingham', slogan: 'This is the official birmingham car community!' },
        { id: 2, communityName: 'Mock Community 2', photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/sazy8cifhohdc5ulfqma.jpg', location: 'London', slogan: 'This is the official London car community!' },
        { id: 3, communityName: 'Mock Community 3', photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg', location: 'Manchester', slogan: 'This is the official Manchester car community!' },
        { id: 4, communityName: 'Mock Community 4', photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/j3fktn5xawkspo4usfkl.jpg', location: 'Liverpool', slogan: 'This is the official Liverpool car community!' },
        { id: 5, communityName: 'Mock Community 5', photoUrl: 'https://res.cloudinary.com/idemo/image/upload/c_fill,g_faces,h_200,w_300/fnadojnxjnqml2buw4yq.jpg', location: 'Swansea', slogan: 'This is the official Swansea car community!' },
        // { id: 6, communityName: 'Mock Community 6', location: 'Essex', slogan: 'This is the official Essex car community!' },
        // { id: 7, communityName: 'Mock Community 7', location: 'Wales', slogan: 'This is the official Wales car community!' },
        // { id: 8, communityName: 'Mock Community 8', location: 'Scotland', slogan: 'This is the official Scotland car community!' },
        // { id: 9, communityName: 'Mock Community 9', location: 'Ireland', slogan: 'This is the official Ireland car community!' },
    );

    mockPosts = new Array<any>(
        { id: 1, communityId: 1, title: 'MockData 1 For Community 1', text: 'Community 1', postedBy: 'CarTalk' },
        { id: 2, communityId: 1, title: 'MockData 2 For Community 1', text: 'Community 1', postedBy: 'Sergio' },
        { id: 3, communityId: 1, title: 'MockData 3 For Community 1', text: 'Community 1', postedBy: 'CarTalk' },
        { id: 4, communityId: 1, title: 'MockData 4 For Community 1', text: 'Community 1', postedBy: 'Suárez' },
        { id: 5, communityId: 1, title: 'MockData 5 For Community 1', text: 'Community 1', postedBy: 'Suárez' },
        { id: 6, communityId: 1, title: 'MockData 6 For Community 1', text: 'Community 1', postedBy: 'Suárez' },
        { id: 7, communityId: 1, title: 'MockData 7 For Community 1', text: 'Community 1', postedBy: 'Suárez' },
        { id: 8, communityId: 1, title: 'MockData 8 For Community 1', text: 'Community 1', postedBy: 'Suárez' },

        { id: 9, communityId: 2, title: 'MockData 1 For Community 2', text: 'Community 2', postedBy: 'Messi' },
        { id: 10, communityId: 2, title: 'MockData 2 For Community 2', text: 'Community 2', postedBy: 'Neymar' },
        { id: 11, communityId: 2, title: 'MockData 3 For Community 2', text: 'Community 2', postedBy: 'Rafinha' },
        { id: 12, communityId: 2, title: 'MockData 4 For Community 2', text: 'Community 2', postedBy: 'Cillessen' },

        { id: 13, communityId: 3, title: 'MockData 1 For Community 3', text: 'Community 3', postedBy: 'Messi' },
        { id: 14, communityId: 3, title: 'MockData 2 For Community 3', text: 'Community 3', postedBy: 'Neymar' },
        { id: 15, communityId: 3, title: 'MockData 3 For Community 3', text: 'Community 3', postedBy: 'Rafinha' },
        { id: 16, communityId: 3, title: 'MockData 4 For Community 3', text: 'Community 3', postedBy: 'Cillessen' },

        { id: 17, communityId: 4, title: 'MockData 1 For Community 4', text: 'Community 4', postedBy: 'Messi' },
        { id: 18, communityId: 4, title: 'MockData 2 For Community 4', text: 'Community 4', postedBy: 'Neymar' },
        { id: 19, communityId: 4, title: 'MockData 3 For Community 4', text: 'Community 4', postedBy: 'Rafinha' },
        { id: 20, communityId: 4, title: 'MockData 4 For Community 4', text: 'Community 4', postedBy: 'Cillessen' },

        { id: 21, communityId: 5, title: 'MockData 1 For Community 5', text: 'Community 5', postedBy: 'Messi' },
        { id: 22, communityId: 5, title: 'MockData 2 For Community 5', text: 'Community 5', postedBy: 'Neymar' },
        { id: 23, communityId: 5, title: 'MockData 3 For Community 5', text: 'Community 5', postedBy: 'Rafinha' },
        { id: 24, communityId: 5, title: 'MockData 4 For Community 5', text: 'Community 5', postedBy: 'Cillessen' },
    )

    mockPostReply = new Array<any>(
        // { id: 1, mockPostId: 1, reply: 'test reply1', postedBy: 'CarTalk', showReplies: 'false' },
        // { id: 2, mockPostId: 1, reply: 'test reply2', postedBy: 'CarTalk', showReplies: 'false' },
        // { id: 3, mockPostId: 1, reply: 'test reply3', postedBy: 'CarTalk', showReplies: 'false' },
        { id: 1, mockPostId: 1, reply: 'test reply1', postedBy: 'CarTalk' },
        { id: 2, mockPostId: 1, reply: 'test reply2', postedBy: 'CarTalk' },
        { id: 3, mockPostId: 1, reply: 'test reply3', postedBy: 'CarTalk' },
    )

    messagesBySender: any

    constructor() { }

    getNotifications(): Array<any> {
        return this.notifications;
    }

    getNotification(id: number): any {
        return this.notifications.filter((item) => item.id === id)[0];
    }

    getNotificationByName(name: string): any {
        return this.notifications.filter((item) => item.name === name)[0];
    }

    getMessages(): Array<any> {
        return this.messages;
    }

    getMessagesBySender(senderName: string): any {
        this.messagesBySender = this.messages.filter((item) => item.senderName === senderName)
        console.log('messages by sender ' + this.messagesBySender.message)
    }

    getConversation(senderName: string, recipientName: string) {
        this.messagesBySender = this.getMessagesBySender(senderName);
        return this.messagesBySender.filter((item: { recipientName: string; }) => item.recipientName === recipientName);
    }
}
