import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Item } from "./item";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    @Input() items: Array<Item>;
    show = false;
    @Output() newDataEvent = new EventEmitter
    @Input() title: String;
    @Input() formTitle: String;


    constructor(
    ) { }

    ngOnInit(): void {
    }

    addnewItem(data) {
        this.newDataEvent.emit(data)
        this.show=!this.show
    }

    showForm(){
        this.show=!this.show
    }
}

