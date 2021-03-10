

    
    document.addEventListener("DOMContentLoaded", () => {
        fetchCases(), createForm(), fetchCategories(), addCBtnForm()
    }) // on DOM load, run these functions 

    const baseUrl = "http://localhost:3000"
    const li = document.createElement('li')

    function fetchCases(){
            fetch(`${baseUrl}/cases`)
            .then(response => response.json())
            .then(cases => { 
                for (const trueCrimeCase of cases){
                let c = new Case (trueCrimeCase.known_as, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category_id)
                }
                })
    }



    function fetchCategories(){
            fetch(`${baseUrl}/categories`)
            .then(response => response.json())
            .then(categories => { 
            for (const category of categories){
                let cat = new Category (category.id, category.title, category.cases)
                cat.renderCategory();
            }
        })
    }

    function createForm(){
        let caseForm = document.getElementById("case-form")

        caseForm.innerHTML +=
        `
        <form>
            <strong> Name:</strong> <input type="text" id="known_as" required> <br>
            <strong> Victim? </strong>
            <label for=“victimFormYes”>Yes:</label> 
            <input  type="radio" id="victimFormYes" name = "victim" value= "true">
            <label for=“victimFormNo”>No:</label> 
            <input type="radio" id="victimFormNo" name = "victim" value= "false"><br>
           <strong>  Bio: </strong>  <input type="text" id="bio" required><br>


            <strong> Solved?: </strong>
            <label for=“solvedFormYes”>Yes:</label> 
            <input type="radio" id="solvedFormYes" name = "solved" value= "true">
            <label for=“solvedFormNo”>No:</label> 
            <input type="radio" id="solvedFormNo" name = "solved" value= "false"><br>
        

            <strong> Category: </strong> <br>
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
            <input type="submit"  value="Create Case">
        </form>
        `;

        caseForm.addEventListener("submit", caseFormSubmit)

    }

    function addCBtnForm() {
        const addBtn = document.querySelector("#new-f-btn");
        const cForm = document.querySelector("#case-form")
        let addC = false;
        cForm.style.display = "none";
        addBtn.addEventListener("click", () => {
            addC = !addC;
            if (addC) {
                cForm.style.display = "block";
                addBtn.innerText = "Nah."
            } else {
                cForm.style.display = "none";
                addBtn.innerText = "Submit Your Own Case"
            }
        })
    }

    function caseFormSubmit(event) {
        event.preventDefault() 
       
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

        const trueCrime = {
             known_as: newKnownAs,
            bio: newBio,
            category_id: newCategory,
            solved: newSolved,
            victim: newVictim
        }
   
        const configObj = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(trueCrime)
        }

        fetch("http://localhost:3000/cases", configObj)
        .then(response => response.json())
        .then(trueCrime => {
            let n = new Case (trueCrime.known_as, trueCrime.victim, trueCrime.bio, trueCrime.solved, trueCrime.category_id)
        // console.log(n)
        
        n.renderCase()
       
        })
            
        event.target.reset()
    }

    function addLifeToModal (trueCrime){
    let modalDiv = document.querySelector(".modal")
    modalDiv.innerHTML =
            `
            <span class="modal-close">x </span>
            <h3> ${trueCrime.known_as}</h3>
            <h4> Bio: <br><br>${trueCrime.bio}<br></h4>
            
            `           
    let modalBg = document.querySelector('.modal-bg');
    modalBg.classList.add("bg-active");

    let modalClose = document.querySelector('.modal-close');

    modalClose.addEventListener("click", function() {
    modalBg.classList.remove("bg-active");
})

}
    
    
   
     
    

    

