class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category = category 
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




