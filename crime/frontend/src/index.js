document.addEventListener("DOMContentLoaded", () => {
    fetchCases()
})
const baseUrl = "http://localhost:3000"

function fetchCases(){
    fetch(`${baseUrl}/cases`)
    .then(response => response.json())
    .then(cases => { for (const trueCrimeCase of cases){
        console.log("ro", trueCrimeCase)
        let c = new Case (trueCrimeCase.knownAs, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category)
        console.log("js", c)
    }
})
}


