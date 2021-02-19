class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        Case.cases.push(this);
    }




    renderCase() {
        let caseDiv = document.getElementById("cases-container")
       
        caseDiv.innerHTML +=
    `
    <ul>
    <li> Name: ${this.known_as} 
    </li>
    </ul>
    `

    }
}       




