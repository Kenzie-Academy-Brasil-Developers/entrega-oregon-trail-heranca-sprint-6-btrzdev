class Hunter extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
        this._food = this._food + 1
    }
    hunt(){
        this._food += 5
        return this._food
    }
    eat(){
        if (this._food > 2){
            this._food = this._food - 2
            
        }
        if (this._food == 1){
            this._food = this._food -1
            this._isHealthy = false;
        }
        if (this._food == 0 || this._food < 0){
            this._isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits){
        if(this._food > numOfFoodUnits){
            this._food -= numOfFoodUnits;
            traveler._food += numOfFoodUnits;
        }
    }
}
