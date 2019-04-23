import { Component, OnInit, Input } from '@angular/core';
import {GameController} from "../helpers/GameController";
import {Timer} from "../helpers/Timer";
import {Observable} from "rxjs";
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-sesja',
  templateUrl: './sesja.component.html',
  styleUrls: ['./sesja.component.css'],
  animations: [
  trigger('poke', [
      transition('* <=> *', animate('100ms', keyframes([
          style({transform: 'scale(1)',  offset: 0}),
          style({transform: 'scale(1.075)',  offset: 0.5}),
          style({transform: 'scale(1)',  offset: 1}),
      ]))),
  ]),
]
})

export class SesjaComponent implements OnInit {

  private active = false;
  private game = GameController.getInstance();
  private count:number;

  constructor() {

  }

  run(){
    this.active = true;
    this.count = 0;
    let actualSat = this.game.getPlayer().getSatisfaction().getValue();
    // console.log(actualSat);
    if(this.count >= 30){
      this.game.getPlayer().addPointsAndGet(300);
      this.game.getPlayer().addExperienceAndGet(300);
      //this.game.getPlayer().addSatisfactionAndGet(100);
      this.game.getPlayer().getSatisfaction().setValue(actualSat);
      this.game.getTimer().resetTime();
    } else {
      this.game.getPlayer().takePointsAndGet(-100);
      this.game.getPlayer().getSatisfaction().setValue(actualSat);
      this.game.getTimer().resetTime();
    }
    setTimeout(()=>{
      this.active = false;
    },20000)
  }

  runSesja(){
    if(this.active == false){
          this.run();
    }

  }

  clicked(){
    this.animateMe();
    //this.game.getPlayer().addSatisfactionAndGet(1);
    this.count++;

  }

  ///animacje
  state: string = 'one';
  animateMe() {
        this.state = (this.state === 'one' ? 'two' : 'one');
  }

  ngOnInit() {
    setInterval(()=>{
      this.runSesja();
    },1000 * 60 * 3); // do testowania dajcie sobie 1000 * 5
  }
}
