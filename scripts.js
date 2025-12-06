function addItem() {
    let addInput = document.getElementById("addItem");
    let addInputText = addInput.value;
    let toDoList = document.getElementById("toDoList");
    let newItem = document.createElement("li");
    newItem.textContent = addInputText
    toDoList.appendChild(newItem)
}