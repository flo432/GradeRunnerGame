import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-lvl',
  templateUrl: './lvl.component.html',
  styleUrls: ['./lvl.component.css']
})
export class LvlComponent implements OnInit {

  private game = GameController.getInstance()

  constructor() { }

  ngOnInit() {
  }

}
