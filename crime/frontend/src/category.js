class Category {
    static categories = [];
constructor(id, title){
    this.id = id
    this.title = title
    this.element = document.createElement("li")
    Category.categories.push(this);
    
}


renderCategory() {
    let categoryDiv = document.getElementById("category-container")
    this.element.innerHTML =
    // categoryDiv.innerHTML +=
    `
         Category: ${this.title} 
    `
    categoryDiv.appendChild(this.element)
    this.element.addEventListener("click", () => this.casesWithinCategory())
    // direct access to element
    //makes it easier to change at a later time 
    // Split append and render into separate functions **
    // append somehwere one time 
}

    render casesWithinCategory() {
        let casesWithCategory = document.getElementById("category-container")

       

    }

}