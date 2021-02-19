class Category {
constructor(id, title){
    this.id = id
    this.title = title
    this.element = document.createElement("li")
    
}

renderCategory() {
    let categoryDiv = document.getElementById("category-container")
    this.element.innerHTML =
    `
         Name: ${this.title} 
    `
    categoryDiv.appendChild(this.element)
    // direct access to element
    //makes it easier to change at a later time 
    // Split append and render into separate functions **
    // append somehwere one time 
}

}