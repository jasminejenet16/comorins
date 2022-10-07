
let addbutton=document.getElementById("add-button");
addbutton.addEventListener("click",addToDoItem);
function addToDoItem(){
   alert("add button clicked");
   }


let clearcompletedbutton=document.getElementById("clear-completed-button");
clearcompletedbutton.addEventListener("click",clearCompletedToDoItems);
function clearCompletedToDoItems(){
   alert("clear completed button clicked");
  }


let emptybutton=document.getElementById("empty-button");
emptybutton.addEventListener("click",emptyList)
function emptyList(){
   alert("empty button clicked");
  }


let savebutton=document.getElementById("save-button");
savebutton.addEventListener("click",saveList )
function saveList(){
   alert("save button clicked");
  }


  let toDoEntryBox = document.getElementById("todo-entry-box");
  let toDoList = document.getElementById("todo-list");


  function newToDoItem(itemText, completed) {
   let toDoItem = document.createElement("li");
   let toDoText = document.createTextNode(itemText);
   toDoItem.appendChild(toDoText);

   if (completed) {
       toDoItem.classList.add("completed");
    }
        toDoList.appendChild(toDoItem);
        toDoItem.addEventListener("dblclick", toggleToDoItemState);
        }


          function addToDoItem() {
       let itemText= toDoEntryBox.value;
       newToDoItem(itemText, false);
      }

       function toggleToDoItemState() {
        if (this.classList.contains("completed")) {
            this.classList.remove("completed");
        } else {
            this.classList.add("completed");
        }
        } 

       function clearCompletedToDoItems() {
       let completedItems = toDoList.getElementsByClassName("completed");

        while (completedItems.length > 0) {
            completedItems.item(0).remove();
        }
        }

       function emptyList() {
        let toDoItems = toDoList.children;
        while (toDoItems.length > 0) {
            toDoItems.item(0).remove();
        }
    }

        function saveList() {
        let toDos = [];

        for (let i = 0; i < toDoList.children.length; i++) {
        let toDo = toDoList.children.item(i);

        let toDoInfo = {
        "task": toDo.innerText,
        "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

        }

        localStorage.setItem("toDos", JSON.stringify(toDos));
    }

    
        function loadList() {
        if (localStorage.getItem("toDos") != null) {
        let toDos = JSON.parse(localStorage.getItem("toDos"));

        for (let i = 0; i < toDos.length; i++) {
            let toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
     }
 }
        loadList();