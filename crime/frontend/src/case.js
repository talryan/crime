class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        this.element = document.createElement("li")
        Case.cases.push(this);
       
    }


 

  

    
   

}

    
   
 






