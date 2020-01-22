import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./Views/login/login.component";
import { LandingPageComponent } from "./Views/_pages/landing-page/landing-page.component";
import { EventsComponent } from "./Components/events/events.component";
import { FeedComponent } from "./Components/landing-page/feed/feed.component";
import { FriendsComponent } from "./Components/friends/friends.component";
import { CreateEventComponent } from "./Components/events/create-event/create-event.component";
import { BottomNavComponent } from "./Views-common/bottom-nav/bottom-nav.component";
import { MyProfileComponent } from "./Views/_pages/my-profile/my-profile.component";
import { EventDetailedComponent } from "./Components/events/event-detailed/event-detailed.component";
import { ActionBarComponent } from "./Views-common/action-bar/action-bar.component";
import { PageNotFoundComponent } from "./Views/page-not-found/page-not-found.component";
import { FriendDetailedComponent } from "./Components/friends/friend-detailed/friend-detailed.component";
import { MainViewComponent } from "./Views-common/main-view/main-view.component";
import { VideoComponent } from "./Components/video/video.component";
import { MapComponent } from "./Components/map/map.component";
import { CommunitiesComponent } from "./Views/_pages/communities/communities.component";
import { ExploreComponent } from "./Views/_pages/explore/explore.component";
import { NotificationsComponent } from "./Views/_pages/_generic-pages/notifications/notifications.component";
import { MessagesComponent } from "./Views/_pages/_generic-pages/messages/messages.component";
import { MessagesDetailedComponent } from "./Views/_pages/_generic-pages/messages/messages-detailed/messages-detailed.component";
import { MyCommunitiesComponent } from "./Components/communities/my-communities/my-communities.component";
import { FollowedCommunitiesComponent } from "./Components/communities/followed-communities/followed-communities.component";
import { AllCommunitiesComponent } from "./Components/communities/all-communities/all-communities.component";
import { CommunityDetailedComponent } from "./Components/communities/community-detailed/community-detailed.component";
import { BrowseFeedComponent } from "./Components/explore/browse-feed/browse-feed.component";
import { ViewImageComponent } from "./Views/_pages/_detailed/view-image/view-image.component";
import { TestComponent } from "./_mocks/test/test.component";
import { AddComponent } from "./Views/_pages/add/add.component";
import { SingleUserComponent } from "./Views/_pages/_generic-pages/single-user/single-user.component";
import { SingleImageComponent } from "./Views/_pages/_generic-pages/single-image/single-image.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        LandingPageComponent,
        EventsComponent,
        FeedComponent,
        FriendsComponent,
        CreateEventComponent,
        BottomNavComponent,
        MyProfileComponent,
        EventDetailedComponent,
        ActionBarComponent,
        PageNotFoundComponent,
        FriendDetailedComponent,
        MainViewComponent,
        VideoComponent,
        MapComponent,
        CommunitiesComponent,
        ExploreComponent,
        NotificationsComponent,
        MessagesComponent,
        MessagesDetailedComponent,
        MyCommunitiesComponent,
        FollowedCommunitiesComponent,
        AllCommunitiesComponent,
        CommunityDetailedComponent,
        BrowseFeedComponent,
        ViewImageComponent,
        TestComponent,
        AddComponent,
        SingleUserComponent,
        SingleImageComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
