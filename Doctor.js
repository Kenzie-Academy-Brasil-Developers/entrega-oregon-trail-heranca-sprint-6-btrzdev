class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)   
     } 

    heal(traveler){      
        if(traveler._isHealthy == false){
        traveler._isHealthy = true         
       
        }
       
     }
    }
