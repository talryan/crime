class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        Case.cases.push(this);
        console.log(this)
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

    
   
    // renderCase() {

    //     // const missingDiv = document.querySelector("#missing-person")
    //     // const criminalDiv = document.querySelector("#criminal")
    //     // const serialKillerDiv = document.querySelector("#serial-killer")
    //     // const unsolvedDiv = document.querySelector("#unsolved")
    //     // const closedDiv = document.querySelector("#closed-case")

        
    //     // missingDiv.innerHTML = ""
    //     // criminalDiv.innerHTML = ""
    //     // serialKillerDiv.innerHTML = ""
    //     // unsolvedDiv.innerHTML = ""
    //     // closedDiv.innerHTML = ""

    //    cases.forEach(trueCrimeCase => {
    //         const p = document.createElement("p")
    //         p.className = "case-details"
    //         p.id = `${trueCrimeCase.id}`
           
    //         p.innerText = trueCrimeCase.known_as;

    //         switch(trueCrimeCase.category.name) {
    //             case "Missing Person":
    //             missingDiv.appendChild(p)
    //             break;
    //             case "Criminal":
    //             criminalDiv.appendChild(p)
    //             break;
    //             case "Serial Killer":
    //             serialKillerDiv.appendChild(p)
    //             break;
    //             case "Unsolved Mystery":
    //             unsolvedDiv.appendChild(p)
    //             break;
    //             case "Closed Case":
    //             closedDiv.appendChild(p)
    //             break;
    //             default:
    //                 "whoops"  //addd something here 
    //         }
    //     })
    // }
}





