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
   
      
        // caseDiv.innerHTML = ""
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
                // modalBtn.addEventListener('click', function(event) {
                //  debugger
                    document.body.innerHTML +=
                    `
                    <div class = "modal-bg">
                    <div class = "modal">
                       <h3> ${trueCrime.known_as}</h3>
                       ${trueCrime.bio}
                    </div>
                    </div>
                    `
                    let modalBg = document.querySelector('.modal-bg');
                    // console.log("hello")
                    modalBg.style.display = "block";
                })
            }
          
            // modalBtn.addEventListener('click', function() {
            //     // modalBg.classList.add('bg-active');
            //     modalBg.style.visibility = "visible"
          
            
    }
    // artistDetailModals = document.querySelectorAll(".artist-details");
    // closeButton = document.querySelector(".close")

    // displayCaseDetails(details){
    //     document.querySelector(".modal-title").innerHTML = `<p class="artist-name"> ${details.name}</p>`
    //     document.querySelector(".modal-body").innerText = details.bio
        
    //   }
       
    }
 
    // }

 



  