export class Satisfaction{
    private value = 100;

    getValue(){
        return Math.floor(this.value);
    }

    setValue(value){
        this.value = value;
    }

    decrease(value){
        this.value -= value;
        if(this.value < 0){
            this.value = 0;
        }
    }

    increase(value){
        this.value += value;
        if(this.value > 100){
            this.value = 100;
        }
    }
}
