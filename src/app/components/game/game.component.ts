import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameController } from "../helpers/GameController";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
    animations: [
	  trigger('poke', [
        transition('* <=> *', animate('100ms', keyframes([
            style({transform: 'scale(1)',  offset: 0}),
            style({transform: 'scale(1.075)',  offset: 0.5}),
		        style({transform: 'scale(1)',  offset: 1}),
        ]))),
    ]),
    trigger('leave', [
		    transition('* <=> *', animate('1000ms', keyframes([
            style({opacity: 1, transform: 'scale(1)',  offset: 0}),
            style({opacity: 0, transform: 'scale(1) translateX(400px)',  offset: 0.5}),
		        style({opacity: 1, transform: 'scale(1)',  offset: 1}),
          ]))),
    ]),
		trigger('fade', [
		    transition('* <=> *', animate('1000ms', keyframes([
            style({opacity: 1, transform: 'scale(1)',  offset: 0}),
            style({opacity: 0, transform: 'scale(1)',  offset: 0.5}),
		        style({opacity: 1, transform: 'scale(1)',  offset: 1}),
        ]))),
    ]),
  ]
})

export class GameComponent implements OnInit {
  public width: Number = 250;
  public height: Number = 600;

  private game = GameController.getInstance();

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  clicked(){
	this.animateMe();
    this.game.click();
  }

  getBoard() {
    let path = '../../../assets/Backgrounds/';
    let board = path + String(this.game.getBackgroundImage()) + ".jpg";
    return `url(${board})`;
  }

  ///animacje
  state: string = 'one';
  animateMe() {
        this.state = (this.state === 'one' ? 'two' : 'one');
  }
}
