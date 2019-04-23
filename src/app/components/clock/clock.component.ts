import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  private game = GameController.getInstance()

  constructor() { }

  ngOnInit() {
  }

}
