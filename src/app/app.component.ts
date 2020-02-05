import { Component } from "@angular/core";


@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    // styleUrls: ['../app.css']
})
export class AppComponent {
    show = false

    showBtn(){
        this.show = !this.show
    }
    
}
