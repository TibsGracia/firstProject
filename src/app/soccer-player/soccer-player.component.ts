import { Component, OnInit } from '@angular/core';
import { Item } from "../item/item";
import { ItemService } from "../item/item.service";
@Component({
  selector: 'ns-soccer-player',
  templateUrl: './soccer-player.component.html',
  styleUrls: ['./soccer-player.component.css']
})
export class SoccerPlayerComponent implements OnInit {
  items: Array<Item>;
  length  = 0  
  show = false
  newData: Item
  constructor(
      private itemService: ItemService,
  ) { }

  ngOnInit(): void {
      this.items = this.itemService.getPlayers();
      this.length = this.itemService.getLength()
  }

  addPlayer(data) {
    this.length = this.itemService.getLength()
      var player = {
          id: this.length + 1,
          name: data.name,
          role: data.role,
          type:"soccer player",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png"
      }
     this.itemService.addItem(player)
     this.items.unshift(player)
  }
 

}
