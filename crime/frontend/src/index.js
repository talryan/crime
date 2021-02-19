document.addEventListener("DOMContentLoaded", () => {
    fetchCases(), createForm()
})

const baseUrl = "http://localhost:3000"

function fetchCases(){
    fetch(`${baseUrl}/cases`)
    .then(response => response.json())
    .then(cases => { for (const trueCrimeCase of cases){

        let c = new Case (trueCrimeCase.known_as, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category)
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
        <input type="radio" id="missingPersonForm" name = "category" value= "1"><br>
        <label for=“missingPersonForm”> Criminal:</label> 
        <input type="radio" id="criminalForm" name = "category" value= "2"><br>
        <label for=“serialKillerForm”> Serial Killer:</label> 
        <input type="radio" id="serialKillerForm" name = "category" value= "3"><br>
        <label for=“unsolvedMysteryForm”> Unsolved Mystery:</label> 
        <input type="radio" id="unsolvedMysteryForm" name = "category" value= "4"><br>
        <label for=“closedCaseForm"”> Closed Case:</label> 
        <input type="radio" id="closedCaseForm" name = "category" value= "5"><br>
        <input type="submit" value="Create Case">
    </form>
    `;

     caseForm.addEventListener("submit", caseFormSubmit)

}

function caseFormSubmit(event) {
    event.preventDefault() 
    let newKnownAs = document.getElementById("known_as").value
    const victimRadio = document.getElementsByName('victim');
    
    const solvedRadio = document.getElementsByName('solved');
    const categoryRadio = document.getElementsByName('category');
}

