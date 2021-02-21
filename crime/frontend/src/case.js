class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        // this.category = Category.all.find((c) => c.id == category_id)
         // return one category object  (will not work if the categories do not finish fetching before the cases are fetched.)
        this.element = document.createElement("li")
        Case.cases.push(this);
       
    }

// Callback function is like a ruby block when you are iterating
listen () {
unsolvedBtn.addEventListener("click", this.pressButtons)
missingBtn.addEventListener("click", this.pressButtons)
serialBtn.addEventListener("click", this.pressButtons)
closedBtn.addEventListener("click", this.pressButtons)
criminalBtn.addEventListener("click", this.pressButtons)
}


    renderCase() {
        // let caseDiv = document.getElementById("cases-container")
        // this.element.innerHTML =
        // `
        //    ${this.known_as} 
        // `
        // caseDiv.appendChild(this.element)
      
    }
   
        renderCaseSubmissionsPopUp() {
        let cForm = document.getElementById("#case-form")
        const addBtn = document.querySelector("new-f-btn");
        alert("Thank you for submitting a case.");
        cForm.style.display = "none";
        addBtn.innerText = "Submit"
        }
        // direct access to element
        //makes it easier to change at a later time 
        // Split append and render into separate functions **
        // append somehwere one time 
}

    
   
 






