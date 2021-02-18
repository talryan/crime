document.addEventListener("DOMContentLoaded", () => {

})
const baseUrl = "http://localhost:3000"
function fetchCases(){
    fetch(`${baseUrl}/cases`)
    .then(response => response.json())
    .then(cases => {for (const case of cases){
        console.log("rails obj", case)
        let c = new Case( case.name, case.victim, case.bio, case.solved, case.category)
        console.log("js Obj", c)
    }
})
}


