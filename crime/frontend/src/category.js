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
        caseDiv.innerHTML = " <h2> Select a Case to Learn More About:</h2>"

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
           
            })
        }
        }
    }


       
     
     
        
          
            
        
  

 



  