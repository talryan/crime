document.addEventListener("DOMContentLoaded", () => {
    fetchCases()
})

const baseUrl = "http://localhost:3000"

function fetchCases(){
    fetch(`${baseUrl}/cases`)
    .then(response => response.json())
    .then(cases => { for (const trueCrimeCase of cases){

        let c = new Case (trueCrimeCase.knownAs, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category)
       c.renderCase();
    }
})
}


function createForm(){
    let caseForm = document.getElementById("case-form")

    caseForm.innerHTML += 
    `
    <form>
        Name: <input type="text" id="knownAs"><br>
        Victim: 
        <input type="radio" id="victim"><br>
        <label for="victim">Yes</label> <br>
        <label for="victim">No</label> <br>
        Bio: <input type="text" id="bio"><br>
      
        Solved?: <input type="radio" id="solved"><br>
        <label for="solved">Yes</label> <br>
        <label for="solved">No</label> <br>
        Category: <input type="radio" id="solved"><br>
        <label for="category"> Missing Person</label> <br>
        <label for="category">Criminal</label> <br>
        <label for="category">Serial Killer</label> <br>
        <label for="category">Unsolved Mystery</label> <br>
        <label for="category">Closed Case</label> <br>
        <input type="submit" value="Create Case">
    </form>
    `

    caseForm.addEventListener("submit", caseFormSubmission)

}

