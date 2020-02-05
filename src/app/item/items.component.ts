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
        // this.items.unshift(this.newData)
        // this.itemService.addItem(this.newData)
        this.newDataEvent.emit(data)
        this.show=!this.show
    }
    delete(id) { 
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i, 1)
            }
        }
    }

    showForm(){
        this.show=!this.show
    }
}

