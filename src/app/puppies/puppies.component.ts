import { Component, OnInit } from '@angular/core';
import { Item } from '~/app/item/item';
import { ItemService } from '~/app/item/item.service';

@Component({
  selector: 'ns-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent implements OnInit {
  items: Array<Item>;
  length = 0
  show = false;
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.items = this.itemService.getPuppies()
  }

  addPuppies(data) {
    this.length = this.itemService.getLength()
    var puppies = {
      id: this.length + 1,
      name: data.name,  
      role: data.role,
      type: "dog",
      image: "https://lh3.googleusercontent.com/proxy/zH4gnKVfo-wX57kf6-Zvpyd_uUT224ZWdxDlLDxYcW4FfRpYMKbwIoSyEhXAt5ZmiyzN-Q7CMjU_yyGy0QP59z2dgl6VsQ8kG88JjUQ5y5Nge9ICz-PPUFVSPpUe7_uhAkCDgsaKvxTGXVMNlU_4e5Fs"
    }
    this.itemService.addItem(puppies)
    this.items.unshift(puppies)
  }


}
