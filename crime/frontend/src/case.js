class Case {
    static cases = [];
    constructor(knownAs, victim, bio, solved, category){
        this.knownAs= knownAs
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
    <li> Killer Name: ${this.knownAs} 
    </li>
    </ul>
    `

    }
}       




