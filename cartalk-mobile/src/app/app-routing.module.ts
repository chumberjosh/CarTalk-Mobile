import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./Views/login/login.component";
import { LandingPageComponent } from "./Views/_pages/landing-page/landing-page.component";
import { CreateEventComponent } from "./Components/events/create-event/create-event.component";
import { MyProfileComponent } from "./Views/_pages/my-profile/my-profile.component";
import { EventDetailedComponent } from "./Components/events/event-detailed/event-detailed.component";
import { PageNotFoundComponent } from "./Views/page-not-found/page-not-found.component";
import { FriendDetailedComponent } from "./Components/friends/friend-detailed/friend-detailed.component";
import { MainViewComponent } from "./Views-common/main-view/main-view.component";
import { VideoComponent } from "./Components/video/video.component";
import { MapComponent } from "./Components/map/map.component";
import { CommunitiesComponent } from "./Views/_pages/communities/communities.component";
import { ExploreComponent } from "./Views/_pages/explore/explore.component";
import { MessagesComponent } from "./Views/_pages/_generic-pages/messages/messages.component";
import { NotificationsComponent } from "./Views/_pages/_generic-pages/notifications/notifications.component";
import { MessagesDetailedComponent } from "./Views/_pages/_generic-pages/messages/messages-detailed/messages-detailed.component";
import { CommunityDetailedComponent } from "./Components/communities/community-detailed/community-detailed.component";
import { ViewImageComponent } from "./Views/_pages/_detailed/view-image/view-image.component";
import { TestComponent } from "./_mocks/test/test.component";
import { AddComponent } from "./Views/_pages/add/add.component";
import { SingleUserComponent } from "./Views/_pages/_generic-pages/single-user/single-user.component";
import { SingleImageComponent } from "./Views/_pages/_generic-pages/single-image/single-image.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: "", component: LandingPageComponent },

    { path: "home", component: LandingPageComponent },
    { path: "communities", component: CommunitiesComponent },
    { path: "communities/detailed/:id", component: CommunityDetailedComponent },
    { path: "explore", component: ExploreComponent },
    { path: "my-profile", component: MyProfileComponent },

    { path: "add", component: AddComponent },

    { path: "single-user/:id", component: SingleUserComponent },

    { path: "messages", component: MessagesComponent },
    { path: "messages/detailed", component: MessagesDetailedComponent },
    { path: "notifications", component: NotificationsComponent },

    { path: "view-image/:id", component: ViewImageComponent },
    { path: "single-image/:id", component: SingleImageComponent },

    { path: "video", component: VideoComponent },
    { path: "map", component: MapComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "event-detailed", component: EventDetailedComponent },
    { path: "friend-detailed", component: FriendDetailedComponent },

    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
