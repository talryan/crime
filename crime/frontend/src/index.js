document.addEventListener("DOMContentLoaded", () => {
    fetchCases(), createForm()
})

const baseUrl = "http://localhost:3000"

function fetchCases(){
        fetch(`${baseUrl}/cases`)
        .then(response => response.json())
        .then(cases => { 
            for (const trueCrimeCase of cases){
        
            let c = new Case (trueCrimeCase.known_as, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category_id)
            c.renderCase();
            }
            })
}


    function createForm(){
        let caseForm = document.getElementById("case-form")

        caseForm.innerHTML +=
        `
        <form>
            Name: <input type="text" id="known_as"><br>
            Victim? 
            <label for=“victimFormYes”>Yes:</label> 
            <input  type="radio" id="victimFormYes" name = "victim" value= "true">
            <label for=“victimFormNo”>No:</label> 
            <input type="radio" id="victimFormNo" name = "victim" value= "false"><br>
            Bio: <input type="text" id="bio"><br>


            Solved?: 
            <label for=“solvedFormYes”>Yes:</label> 
            <input type="radio" id="solvedFormYes" name = "solved" value= "true">
            <label for=“solvedFormNo”>No:</label> 
            <input type="radio" id="solvedFormNo" name = "solved" value= "false"><br>
        

            Category: <br>
            <label for=“missingPersonForm”> Missing Person:</label> 
            <input type="radio" id="missingPersonForm" name = "category_id" value= "1"><br>
            <label for=“missingPersonForm”> Criminal:</label> 
            <input type="radio" id="criminalForm" name = "category_id" value= "2"><br>
            <label for=“serialKillerForm”> Serial Killer:</label> 
            <input type="radio" id="serialKillerForm" name = "category_id" value= "3"><br>
            <label for=“unsolvedMysteryForm”> Unsolved Mystery:</label> 
            <input type="radio" id="unsolvedMysteryForm" name = "category_id" value= "4"><br>
            <label for=“closedCaseForm"”> Closed Case:</label> 
            <input type="radio" id="closedCaseForm" name = "category_id" value= "5"><br>
            <input type="submit" value="Create Case">
        </form>
        `;

        caseForm.addEventListener("submit", caseFormSubmit)

    }

    function caseFormSubmit(event) {
        event.preventDefault() 
        let caseDiv = document.getElementById("cases-container").innerHTML = ""
      
        let newKnownAs = document.getElementById("known_as").value
        let newBio = document.getElementById("bio").value

        const victimRadio = document.getElementsByName('victim');
        let newVictim 
        for (var i = 0, length = victimRadio.length; i < length; i++) {
            if (victimRadio[i].checked) {
                newVictim = victimRadio[i].value
            }
        }
        const solvedRadio = document.getElementsByName('solved');
        let newSolved
        for (var i = 0, length = solvedRadio.length; i < length; i++) {
            if (solvedRadio[i].checked) {
                newSolved = solvedRadio[i].value
            }
        }

        const categoryRadio = document.getElementsByName('category_id');
            let newCategory
            for (var i = 0, length = categoryRadio.length; i < length; i++) {
                if (categoryRadio[i].checked) {
                    newCategory = categoryRadio[i].value
                }
        }

    let trueCrime = {
        known_as: newKnownAs,
        bio: newBio,
        category_id: newCategory,
        solved: newSolved,
        victim: newVictim

    }
    fetch(`${baseUrl}/cases`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trueCrime)
    })
    .then(response => response.json())
    .then(trueCrime => {
        let n = new Case (trueCrime.known_as, trueCrime.victim, trueCrime.bio, trueCrime.solved, trueCrime.category_id)
        n.renderCase();

    })

    }


