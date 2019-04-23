import {Satisfaction} from "./Satisfaction";
import {Upgrade, UpgradeType} from "./Upgrades";
import {Degree} from "./Degree";
export class Player{
    private static levels = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];

    private points = 0;
    private level = 1;
    private experience = 0;
    private gradeProgress = 0;

    private expBase = 0;
    private pointsBase = 0;
    private progressBase = 0;

    private expMult = 1;
    private pointsMult = 1;
    private progressMult = 1;

    private satisfaction = new Satisfaction();

    private degree = Degree.MAGISTER;

    increaseExpBase(value){
        this.expBase+=value;
    }

    increaseExpMult(value){
        this.expMult*=value;
    }

    increasePointsBase(value){
        this.pointsBase+=value;
    }

    increasePointsMult(value){
        this.pointsMult*=value;
    }

    increaseProgressBase(value){
        this.progressBase+=value;
    }

    increaseProgressMult(value){
        this.progressMult*=value;
    }

    buyUpgrade(upgrade){
        this.takePointsAndGet(upgrade.cost);
        this.increaseExpBase(upgrade.expAdd);
        this.increaseExpMult(upgrade.expMult);
        this.increasePointsBase(upgrade.pointsAdd);
        this.increasePointsMult(upgrade.pointsMult);
        this.increaseProgressBase(upgrade.progressAdd);
        this.increaseProgressMult(upgrade.progressMult);
        if(upgrade.type == UpgradeType.SCIENCE){
          console.log(upgrade.name);
          console.log(this.degree)
          if(upgrade.name == "Uzyskaj tytuł doktora"){
            this.setDegree(Degree.DOKTOR);
          }
          else if(upgrade.name == "Uzyskaj tytuł doktora hab."){
            this.setDegree(Degree.DOKTOR_HAB);
          }
          else if(upgrade.name == "Uzyskaj tytuł profesora nadzw."){
            this.setDegree(Degree.PROFESOR_NDZW);
          }
          else if(upgrade.name == "Uzyskaj tytuł profesora"){
            this.setDegree(Degree.PROFESOR);
          }
          console.log(this.degree)
        }
    }

    takePointsAndGet(value){
        this.points -= value;
        if(this.points < 0){
            this.points = 0
        }
        return this.points;
    }

    addPointsAndGet(add=1){
        add = (add+this.pointsBase)*this.pointsMult;
        this.points += add;
        return this.points;
    }

    addExperienceAndGet(add=1){
        add = (add+this.expBase)*this.expMult;
        this.experience += add;
        this.recalculateLevel();
        return this.experience;
    }

    addProgressAndGet(add=1){
        add = (add+this.progressBase)*this.progressMult;
        if( this.gradeProgress <= 100 )
            this.gradeProgress += add;
        return this.gradeProgress;
    }

    recalculateLevel(){
        for (let i = Player.levels.length; i > 0; i-- ){
            if(this.experience > Player.levels[i]){
                this.level = i;
                return;
            }
        }
    }

    setExperience(experience) {
        this.experience += experience;
    }


    getPoints(){
        return this.points;
    }

    getLevel(){
        return this.level;
    }

    getExperience(){
        return this.experience;
    }

    getProgress(){
        return this.gradeProgress;
    }

    setPoints(points){
      this.points = points;
    }

    setLevel(level){
      this.level = level;
    }

    getSatisfaction(){
        return this.satisfaction;
    }

    resetProgress() {
        this.gradeProgress = 0;
    }

    getDegree(){
      return this.degree
    }

    setDegree(degree){
      this.degree = degree;
    }

    setSatisfaction(satisfaction){
      this.satisfaction = satisfaction;
    }

    setSatisfactionValue(satisfaction){
      this.satisfaction.setValue(satisfaction);
    }

    getExpBase(){
      return this.expBase;
    }

    setExpBase(expBase){
      this.expBase = expBase;
    }

    getPointsBase(){
      return this.pointsBase;
    }

    setPointsBase(pointsBase){
      this.pointsBase = pointsBase;
    }

    getProgressBase(){
      return this.progressBase;
    }

    setProgressBase(progressBase){
      this.progressBase = progressBase;
    }

    getExpMult(){
      return this.expMult;
    }

    setExpMult(expMult){
      this.expMult = expMult;
    }

    getPointsMult(){
      return this.pointsMult;
    }

    setPointsMult(pointsMult){
      this.pointsMult = pointsMult;
    }

    getProgressMult(){
      return this.progressMult;
    }

    setProgressMult(progressMult){
      this.progressMult = progressMult;
    }
}
