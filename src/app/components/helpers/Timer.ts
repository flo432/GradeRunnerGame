import {Observable} from "rxjs";
import {GameController} from "./GameController";
export class Timer{
    private time: any;
    private sec: any;
    private game: GameController;
    private static instance: Timer;

    constructor(sec:  number, game: GameController){
        this.time = sec;
        this.sec = sec;
        this.game = game;
    }

	resetTime (){
		this.time = this.sec
	}

    count(){
        if(this.time == 0){
            this.time = this.sec;
            this.game.onTimeEnd();
        } else {
            this.game.onTimeDecrease();
            this.time -= 1;
        }
    }

    run(){
        let timer = Observable.timer(0,1000);
        timer.subscribe(t=>this.count());
    }

    getTime(){
        return this.time;
    }
}