import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.css']
})
export class TeachingComponent implements OnInit {
  private game = GameController.getInstance();
  private science = this.game.getUpgrades().getScience();
  private player = this.game.getPlayer()

  constructor() {

  }

   public check(index: number){
     if(index >= 6) {
       if(this.player.getDegree() != index - 6 || this.player.getLevel() < (index-5)*4)
         return 0;
       else
         return this.player.getPoints();
     }
     else
         return this.player.getPoints();
    }

    private cantBuyForLevel(index: number, cost: number) {
      return ((this.player.getLevel() < (index-5)*4  || this.player.getDegree() != index - 6) && index >= 6)
    }

    private cantBuyForCash(index: number, cost: number) {
      return (index < 6 && this.player.getPoints() < cost)
    }

    private buyThis(index: number, cost: number){
      if(this.cantBuyForLevel(index, cost) || this.cantBuyForCash(index, cost)) {
        console.log("dupa");
      } else {
          if(this.player.getPoints() > 0){
            let upgrade = this.science[index];
            this.player.buyUpgrade(upgrade);
        }
      }
        // ?WHAT -> Upgrade.ts 49-67
        // this.game.getPlayer().addPointsAndGet(this.science[index].pointsAdd * this.science[index].pointsMult);
        // ?WHAT -> Upgrade.ts 49-67
      }

  ngOnInit() {
  }

}
