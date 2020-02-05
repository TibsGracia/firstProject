import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
// import {GridLayoutComponent} from "./grid-layout/grid-layout.component"
import { PuppiesComponent } from './puppies/puppies.component';
import { SoccerPlayerComponent } from './soccer-player/soccer-player.component';
import {AppComponent} from './app.component'

const routes: Routes = [
    // {path: "", redirectTo:"/home", pathMatch:"full"},
    { path: "home", component: AppComponent},
    { path: "items", component: ItemsComponent },
    {path: "players", component: SoccerPlayerComponent},
    { path: "item/:id", component: ItemDetailComponent },
    // { path: "grid", component: GridLayoutComponent}
    { path: "puppies", component: PuppiesComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
