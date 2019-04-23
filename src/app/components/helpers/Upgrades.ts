export enum UpgradeType{
    SCIENCE, DIDACTICS
}

export class Upgrade{
    private cost: Number;
    private type: UpgradeType;

    private expAdd: Number;
    private expMult: Number;

    private pointsAdd: Number;
    private pointsMult: Number;

    private progressAdd: Number;
    private progressMult: Number;

    private name: String;


    constructor(cost: Number, type: UpgradeType, expAdd: Number, expMult: Number, pointsAdd: Number, pointsMult: Number,
                progressAdd: Number, progressMult: Number, name: String) {
        this.cost = cost;
        this.type = type;
        this.expAdd = expAdd;   // level
        this.expMult = expMult;
        this.pointsAdd = pointsAdd; // money
        this.pointsMult = pointsMult;
        this.progressAdd = progressAdd; // ocena
        this.progressMult = progressMult;
        this.name = name;
    }

    public getCost(){
      return this.cost;
    }

    public getType(){
      return this.type;
    }

    public getName(){
      return this.name;
    }
}

export class Upgrades{
    private static instance: Upgrades;

    private upgrades: Upgrade[];
    private oneTimeEvent: Number[]; // 0 - many time, 1 - one time, 2 - unavailable

    constructor(){
        this.upgrades = [];
        this.upgrades.push(
            new Upgrade(100, UpgradeType.SCIENCE, 1, 1, 0, 1.001, 0, 1.001, "Napisz lekką publikację"),
            new Upgrade(150, UpgradeType.SCIENCE, 1, 1, 0, 1.002, 0, 1.002, "Napisz poważną publikację"),
            new Upgrade(250, UpgradeType.SCIENCE, 1, 1, 0, 1.003, 0, 1.003, "Weź udział w konferencji"),
            new Upgrade(800, UpgradeType.SCIENCE, 1, 1, 0, 1.05, 0, 1, "Przygotuj konferencję"),
            new Upgrade(1000,UpgradeType.SCIENCE, 1, 1, 0, 1.07, 0, 1, "Napisz skrypt zajęć"),
            new Upgrade(5000, UpgradeType.SCIENCE, 1, 1, 0, 1.4, 0, 1, "Wypromuj studenta"),
            new Upgrade(90000, UpgradeType.SCIENCE, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, "Uzyskaj tytuł doktora"),
            new Upgrade(140000, UpgradeType.SCIENCE, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, "Uzyskaj tytuł doktora hab."),
            new Upgrade(600000, UpgradeType.SCIENCE, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8, "Uzyskaj tytuł profesora nadzw."),
            new Upgrade(1000000, UpgradeType.SCIENCE, 2, 2, 2, 2, 2, 2, "Uzyskaj tytuł profesora"),

            new Upgrade(100, UpgradeType.DIDACTICS, 0, 1, 1, 1, 0, 1.001, "Przeczytaj publikację"),
            new Upgrade(500, UpgradeType.DIDACTICS, 0, 1, 1, 1.01, 0, 1.002, "Przeprowadź konsultacje"),
            new Upgrade(1000, UpgradeType.DIDACTICS, 0, 1, 0, 1, 0, 1.03, "Przygotuj się do zajęć"),
            new Upgrade(9000, UpgradeType.DIDACTICS, 0, 1, 0, 1, 0, 1.1, "Przygotuj kolokwium"),
            new Upgrade(14000, UpgradeType.DIDACTICS, 0, 1, 0, 1.1, 0, 1.2, "Napisz skrypt zajęć"),
            new Upgrade(100000, UpgradeType.DIDACTICS, 1.25, 1.25, 1.25, 1.25, 1.25, 1.25, "Kurs szybkiego czytania"),
            new Upgrade(600000, UpgradeType.DIDACTICS, 1.4, 1.4, 1.4, 1.4, 1.4, 1.4, "Kurs interakcji ze studentami"),
            new Upgrade(1000000, UpgradeType.DIDACTICS, 2, 2, 2, 2, 2, 2, "Kurs oceniania")
        )
    }

    static getInstance(){
      if(this.instance == null){
        this.instance = new Upgrades();
      }
      return this.instance;
    }

    public getDidactics(){
      let didactics = [];
      for(let entry of this.upgrades){
        if(entry.getType() == UpgradeType.DIDACTICS){
          didactics.push(entry)
        }
      }
      return didactics;
    }

    public getScience(){
      let science = [];
      for(let entry of this.upgrades){
        if(entry.getType() == UpgradeType.SCIENCE){
          science.push(entry);
        }
      }
      return science;
    }
}
