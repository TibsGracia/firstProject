import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PanGestureEventData } from "ui/gestures";
import { Image } from "ui/image";

import { Item } from "./item";
import { ItemService } from "./item.service";


@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    @ViewChild("dragImage", { static: true }) dragImage: ElementRef;
    dragImageItem: Image;
    prevDeltaX: number;
    prevDeltaY: number;

    item: Item;
    score = 0;
    show = false
    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);

        this.dragImageItem = <Image>this.dragImage.nativeElement;
        this.dragImageItem.translateX = 0;
        this.dragImageItem.translateY = 0;
        this.dragImageItem.scaleX = 1;
        this.dragImageItem.scaleY = 1
    }

    onPan(args: PanGestureEventData) {
        //console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
        if (args.state === 1) // down
        {
          this.prevDeltaX = 0;
          this.prevDeltaY = 0;
        }
        else if (args.state === 2) // panning
        {
          this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
          this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;
      
          this.prevDeltaX = args.deltaX;
          this.prevDeltaY = args.deltaY;
        }
        else if (args.state === 3) // up
        {
      
        }
      }

    addScore() {
        this.score++
    }
    removeScore() {
        this.score--
    }

    update() {
        this.show = !this.show;
    }

    updatePlayer(data) {
        this.item.name = data.name
        this.item.role = data.role
        this.update()
    }

}
