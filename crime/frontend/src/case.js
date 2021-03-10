class Case {
    static cases = [];
    constructor(known_as, victim, bio, solved, category_id){
        this.known_as = known_as
        this.victim = victim
        this.bio = bio 
        this.solved = solved
        this.category_id = category_id
        this.element = document.createElement("li")
        Case.cases.push(this);
       
    }

    renderCase() {
        let caseDiv = document.getElementById("cases-container")
      
        li.innerHTML = 
            `
            <button id="modal-${this.id}" class="modal-button"> ${this.known_as} </button>
            `
        caseDiv.appendChild(li) 
        alert("Thank you for submitting a case.");
       
          let modalBtn = document.getElementById(`modal-${this.id}`);
                modalBtn.addEventListener('click', function(e){
                let trueCrime = Case.cases.find((c) => c.known_as == e.target.innerText)
                addLifeToModal(trueCrime)
                })
            }
   
    
 

  

    
   

}

    
   
 






