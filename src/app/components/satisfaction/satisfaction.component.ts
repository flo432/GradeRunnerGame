import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";
import {DialogService} from "ng2-bootstrap-modal";
import {EventComponent} from "./event.component";

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.css']
})
export class SatisfactionComponent implements OnInit {

  private game = GameController.getInstance();
  private satisfaction = this.game.getSatisfaction();
  private player = this.game.getPlayer();


  constructor(private dialogService:DialogService) {
  }

  runBadEvent(){
    if(!this.game.isEventInProgress()) {
      this.game.setEventInProgress();
      let disposable = this.dialogService.addDialog(EventComponent, {
        title: this.game.getBadEventTitle(),
        message: this.game.getBadEventMessage()
      })
          .subscribe((isConfirmed) => {
            //We get dialog result
            if (isConfirmed) {
              this.game.badEventDone();
            }
            else {
              this.game.badEventDone();
            }
          });
    }
  }


  ngOnInit() {
  }

}
