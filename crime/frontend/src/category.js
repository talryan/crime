class Category {
    static categories = [];
constructor(id, title, cases){
    this.id = id
    this.title = title
    this.element = document.createElement("li")
    this.cases = cases
    Category.categories.push(this);
    
}





renderCategory() {
    let categoryDiv = document.getElementById("category-container")
    this.element.innerHTML =
    // categoryDiv.innerHTML +=
    `
         <button class="btn btn-dark">  ${this.title} </button>
    `
    categoryDiv.appendChild(this.element)
    this.element.addEventListener("click", () => this.renderCasesWithinCategory())
    //this.renderCasesWithinCategory())
    // direct access to element
    //makes it easier to change at a later time 
    // Split append and render into separate functions **
    // append somehwere one time 
}

    renderCasesWithinCategory() {
        let caseDiv = document.getElementById("cases-container")
        caseDiv.innerHTML = ""
            this.cases.forEach(trueCrimeCase => 
            caseDiv.innerHTML +=
            `
           <li>
           <button class="modal-button"> ${trueCrimeCase.known_as} </button>
           
            </li>
            `
    


           
          
            );
            // console.log(trueCrimeCase.known_as)
    //  let c = new Case (trueCrimeCase.known_as, trueCrimeCase.victim, trueCrimeCase.bio, trueCrimeCase.solved, trueCrimeCase.category_id)
    }
        // caseDiv.append(this.element)
        // let casesWithCategory = document.getElementById("category-container")
    }
 
    // }


  