import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'option-bar',
  templateUrl: './option-bar.component.html',
  styleUrls: ['./option-bar.component.css']
})
export class OptionBarComponent implements OnInit {

  private game = GameController.getInstance();

  constructor() {
  }

  ngOnInit() {
  }

}
