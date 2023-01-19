const toDoItems = document.getElementsByClassName
("To-do-Items")[0];
const input = document.getElementById("input");
// const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(zaid){
    if(zaid.key==="Enter")
    addItem();
})
function addItem(){
   var divParent = document.createElement("div");
   var divChild = document.createElement("div");
   var checkIcon = document.createElement("i");
   var trashIcon = document.createElement("i");

   divParent.className = "item";
   divParent.innerHTML = '<div>'+input.value+'</div>';
   checkIcon.className = "fa-solid fa-square-check";
   checkIcon.style.color = "ligtgray";
   checkIcon.addEventListener("click", function(){
    checkIcon.style.color = "limegreen";
   })
   trashIcon.className = "fa-solid fa-trash";
   trashIcon.style.color = "darkgray";
   trashIcon.addEventListener("click", function(){
        divParent.remove();
    })
   divChild.appendChild(checkIcon);
   
   divChild.appendChild(trashIcon);
   divParent.appendChild(divChild);
   toDoItems.appendChild(divParent);
   input.value = '';
}