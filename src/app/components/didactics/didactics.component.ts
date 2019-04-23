import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-didactics',
  templateUrl: './didactics.component.html',
  styleUrls: ['./didactics.component.css']
})
export class DidacticsComponent implements OnInit {
  private game = GameController.getInstance();
  private didactics = this.game.getUpgrades().getDidactics();

  constructor() {  }

  public check(){
    return this.game.getPlayer().getPoints();
  }

  private buyThis(index: number, cost: number){
    let player = this.game.getPlayer()

    if(player.getPoints() < cost){

    }else {
      if(player.getPoints() > 0){
        let upgrade = this.didactics[index];
        player.buyUpgrade(upgrade)
      }

    }

  }

  ngOnInit() {
  }

}
