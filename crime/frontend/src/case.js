class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        // this.category = Category.all.find((c) => c.id == category_id)
         // return one category object  (will not work if the categories do not finish fetching before the cases are fetched.)
        this.element = document.createElement("li")
        Case.cases.push(this);
       
    }




    // renderCase() {
   
    // }

    
   

}

    
   
 






