import {Timer} from "./Timer";
import {Player} from "./Player";
import {Upgrades} from "./Upgrades";
import {CookieService} from "../../services/cookie.service"
import {Satisfaction} from "./Satisfaction";
import {Degree} from "./Degree";
export class GameController{
    private static instance: GameController;

    private timer: Timer;
    private player: Player;
    private satisfaction: Satisfaction;
    private upgrades: Upgrades;
    private cookieService: CookieService;
  	private characterArt: string;
    private backgroundImage;
    private badEvent: boolean;
    private scienceMode: boolean;
    private bonusIfPass;
    private gainedExperience;
    private bgstateNum;
    private eventInProgress: boolean;

    public characterArtstate: string;
    public bgstate;



    public static getInstance(){
        if(this.instance == null){
            this.instance = new GameController();
        }
        return this.instance;
    }

    constructor(){
        this.timer = new Timer(10, this);
        this.timer.run();
        this.player = new Player();
        this.satisfaction = this.player.getSatisfaction();
        this.upgrades = new Upgrades();
        this.cookieService = new CookieService();
        if(this.cookieService.isSet("game")){
          // console.log("cookie is set");
          let game_stats = this.cookieService.getCookie("game");
          this.player.setPoints(game_stats.points);
          this.player.setLevel(game_stats.level);
          this.player.setExperience(game_stats.experience);

          this.player.setExpBase(game_stats.expBase);
          this.player.setPointsBase(game_stats.pointsBase);
          this.player.setProgressBase(game_stats.progressBase);

          this.player.setExpMult(game_stats.expMult);
          this.player.setPointsMult(game_stats.pointsMult);
          this.player.setProgressMult(game_stats.progressMult);

          this.player.setSatisfactionValue(game_stats.satisfaction);
          this.player.setDegree(game_stats.degree);

        }
        this.setCookie();
        this.characterArt = '';
        this.backgroundImage = 1;
        this.bgstateNum = 0;
        this.scienceMode = false;
        this.badEvent = false;
        this.bonusIfPass = 10;
        this.gainedExperience = 5;
        this.eventInProgress = false;
    }

    public click(){
        this.player.addExperienceAndGet(1);
        this.player.addPointsAndGet(1);
        if (this.scienceMode == false)
            this.player.addProgressAndGet(1);
        else
            this.satisfaction.increase(0.25);
    }

    public getTime(){
        return this.timer.getTime();
    }

    public getTimer(){
        return this.timer;
    }

    public getPlayer(){
        return this.player;
    }

    public getUpgrades(){
      return this.upgrades;
    }

    public getSatisfaction(){
        return this.satisfaction;
    }

    public getBadEvent(){
        return this.badEvent;
    }

  	public getCharacterArt(){
          return this.characterArt;
    }

    public onTimeDecrease(){
        this.tryBadEvent();
    }

    public onTimeEnd(){
        this.changeBackgroundImage();
        this.changeCharacterArt();

        if (this.scienceMode == false) {
          this.satisfaction.decrease(10);
        }

        if (this.player.getProgress() >= 50 && !this.isInScienceMode()) {
          this.checkIfPass(); // zapisuje do waluty NaN
        }

        this.player.resetProgress();
    }

    private checkIfPass() {
        this.player.addExperienceAndGet(this.gainedExperience);
        this.player.addPointsAndGet(this.bonusIfPass);
    }


    public tryBadEvent(){
        let probability = 0;
        if(this.satisfaction.getValue() < 35){
            probability = Math.min(1, (35-this.satisfaction.getValue())/100+0.05)
            if(Math.random() < probability){
                this.executeBadEvent()
            }
        }
    }

    public executeBadEvent(){
        this.badEvent = true;
    }

    public setEventInProgress(){
        this.eventInProgress = true;
    }

    public isEventInProgress(){
        return this.eventInProgress;
    }

    public badEventDone(){
        this.badEvent = false;
        this.eventInProgress = false;
    }

    public tryGoodEvent(){
        //TODO: implement
    }

    public setCookie(){
      setInterval(() => {
        let name = "game";
        let value = {
          "points":this.player.getPoints(),
          "level":this.player.getLevel(),
          "experience":this.player.getExperience(),
          "expBase":this.player.getExpBase(),
          "pointsBase":this.player.getPointsBase(),
          "progressBase":this.player.getProgressBase(),
          "expMult":this.player.getExpMult(),
          "pointsMult":this.player.getPointsMult(),
          "progressMult":this.player.getProgressMult(),
          "satisfaction":this.player.getSatisfaction().getValue(),
          "degree":this.player.getDegree(),

        };
        this.cookieService.setCookie(name, value);
      }, 30000);
    }

  	public changeCharacterArt(){
      this.characterArtstate = (this.characterArtstate === 'one' ? 'two' : 'one');
	setTimeout(() =>{
		let temp=this.characterArt;
		let chance=Math.floor(Math.random()*2);

		while(temp==this.characterArt){
		if (this.isInScienceMode()){
			this.characterArt = '../../../assets/prof/' + Math.floor(Math.random()*5) + '_prof.png'
			}
		else if((chance==0)&&(this.player.getDegree()>=3)){
			this.characterArt = '../../../assets/dok/' + Math.floor(Math.random()*10) + '_dok.png'
			}
		else if((chance==1)&&(this.player.getDegree()>=1)){
			this.characterArt = '../../../assets/mag/' + Math.floor(Math.random()*10) + '_mag.png'
			}
		else{
			this.characterArt = '../../../assets/lic/' + Math.floor(Math.random()*10) + '_lic.png'
			}
		}
     },500);
    }

    public getBackgroundImage(){
      return this.backgroundImage;
    }

    public changeBackgroundImage(){
        this.bgstateNum=this.bgstateNum+1;
		    if (this.bgstateNum == 5) {
            this.bgstateNum = 0
        }

        if (this.bgstateNum == 0) {
		        this.bgstate = (this.bgstate === 1 ? 2 : 1);
		        setTimeout(() =>{
		            let temp = this.backgroundImage;
		             while (temp == this.backgroundImage){
			                this.backgroundImage = Math.floor(Math.random()*5);
		             }
	          },500);
	      }
    }

    public isInScienceMode(){
      return this.scienceMode;
    }

    public changeMode(){
      this.scienceMode = !this.scienceMode;
    }

    public getBadEventTitle(){
        let titles = ["Kara od kierownika za niedopełnianie obowiązków (pop-up)",
            "Przymusowe szkolenie BHP (pop-up)",
            "Ciężka rozmowa z dziekanem",
            "Wezwanie na dywanik Rektora (pop-up)"];

        return titles[Math.floor(Math.random() * titles.length)]
    }

    public getBadEventMessage(){
        let messages = ["Obniżenie waluty.", "Obniżenie bonusu doświadczenia.", "Obniżenie waluty.",
            "Poważne obniżenie waluty oraz bonusu doświadczenia."];

        return messages[Math.floor(Math.random() * messages.length)]
    }

    public resetGame(){

      this.cookieService.deleteCookie("game");

      this.player.setPoints(0);
      this.player.setLevel(1);
      this.player.setExperience(0);

      this.player.setExpBase(0);
      this.player.setPointsBase(0);
      this.player.setProgressBase(0);

      this.player.setExpMult(1);
      this.player.setPointsMult(1);
      this.player.setProgressMult(1);

      this.player.setSatisfaction(new Satisfaction());
      this.satisfaction = this.player.getSatisfaction();

      this.player.setDegree(Degree.MAGISTER);
    }
}
