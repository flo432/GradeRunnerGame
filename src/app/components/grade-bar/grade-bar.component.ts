import { Component, OnInit } from '@angular/core';
import {GameController} from "../helpers/GameController";

@Component({
  selector: 'app-grade-bar',
  templateUrl: './grade-bar.component.html',
  styleUrls: ['./grade-bar.component.css']
})
export class GradeBarComponent implements OnInit {
  private game = GameController.getInstance();
  private time = this.game.getTimer();
  private player = this.game.getPlayer();
  private satisfaction = this.player.getSatisfaction();

  constructor() {
  }

  private calculateGrade() : number {
    if( this.player.getProgress() < 40 ) {
      return 2.0
    }
    else if( this.player.getProgress() < 50 ) {
      return 2.5
    }
    else if( this.player.getProgress() < 60 ) {
      return 3.0
    }
    else if( this.player.getProgress() < 70 ) {
      return 3.5
    }
    else if( this.player.getProgress() < 80 ) {
      return 4.0
    }
    else if( this.player.getProgress() < 90 ) {
      return 4.5
    }
    else {
      return 5.0
    }
  }

  isPassed() : boolean {
    if( this.player.getProgress() < 50 ) {
      return false
    }
    else
      return true
  }

  ngOnInit() {
  }

}
