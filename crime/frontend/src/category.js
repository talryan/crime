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
        `
            <button class="btn btn-dark">  ${this.title} </button>
        `
        categoryDiv.appendChild(this.element)
        this.element.addEventListener("click", () => this.renderCasesWithinCategory())

    }

    renderCasesWithinCategory() {
            let caseDiv = document.getElementById("cases-container")
            caseDiv.innerHTML =
            `
            <h2> Select a ${this.title} Case to Learn More About:</h2>
            `
           
            this.cases.forEach(trueCrimeCase => 
                caseDiv.innerHTML +=
                `
                <li>
                    <button class="modal-button"> ${trueCrimeCase.known_as} </button>
                </li>
                `
                );
         
            let modalBtn = document.querySelectorAll('.modal-button');

                for (let btn of modalBtn){ btn.addEventListener('click', function(e){
                 
                    let trueCrime = Case.cases.find((c) => c.known_as == e.target.innerText)
                    addLifeToModal(trueCrime)
                })
            }
        }
      

       
}


       
     
     
        
          
            
        
  

 



  