import { Component, OnInit } from '@angular/core'
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  private game = GameController.getInstance();

  constructor() { }
  
  private getMoney() {
    return this.game.getPlayer().getPoints().toFixed();
  }

  ngOnInit() {
  }

}
