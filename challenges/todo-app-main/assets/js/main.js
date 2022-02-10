import TaskTemplate from "./lib/TaskTemplate.js";

const Todo = {
  storeTasks: [],
  IndexCurrentTak: 0,

  updateListDom: (nodeList, dependencyArray = []) => {
    const board = document.querySelector("ul");

    board.innerHTML = " ";
    nodeList.map((item) => board.appendChild(item.Element));

    dependencyArray.length > 0 &&
      dependencyArray.forEach((dependency) => {
        console.log(dependency);
        dependency();
      });
  },

  viewTaskListSize: () => Todo.storeTasks.length,

  createListTaks: (task) => {
    [task].forEach((currentTask) => {
      const taskElement = document.createElement("li");

      taskElement.setAttribute("data-index", Todo.storeTasks.length);

      taskElement.innerHTML = TaskTemplate(currentTask, Todo.storeTasks.length);

      const task = {
        status: false,
        Element: taskElement,
      };

      Todo.storeTasks.push(task);
    });
  },

  swapListTasks: (fromIndex, toIndex) => {
    console.log("status", Todo.storeTasks[fromIndex], Todo.storeTasks[toIndex])
    const Status1 = Todo.storeTasks[fromIndex].status;
    const status2 = Todo.storeTasks[toIndex].status;
    const item1 = Todo.storeTasks[fromIndex].Element.querySelector(".dragglabe");
    const item2 = Todo.storeTasks[toIndex].Element.querySelector(".dragglabe");

    Todo.storeTasks[toIndex].Element.appendChild(item1);
    Todo.storeTasks[fromIndex].Element.appendChild(item2);

    Todo.storeTasks[toIndex].status = Status1;
    Todo.storeTasks[fromIndex].status = status2;
  },

  toggleStatusTask: (indexTask) => {
    const task = Todo.storeTasks[indexTask].status;

    if (task == false) return (Todo.storeTasks[indexTask].status = true);
    if (task == true) return (Todo.storeTasks[indexTask].status = false);
  },

  removeTaskToList: (event) => {
    let task =
      Todo.storeTasks[event.dataset.index].Element.querySelector(".close img")
        .dataset.index;

    Todo.storeTasks.splice(task, 1);

    Todo.storeTasks = Todo.storeTasks.map((item, index) => {

      item.Element.setAttribute(
        "data-index",
        index
      );

      item.Element.querySelector(".status .check").setAttribute(
        "data-index",
        index
      );

      item.Element.querySelector(".close img").setAttribute(
        "data-index",
        index
      );

      Todo.IndexCurrentTak = 0
      return item;
    });

    Todo.updateListDom(Todo.storeTasks, [addEventsToRemovingItemList, Todo.viewTaskListSize]);
    showSizeTodoList.innerHTML = Todo.viewTaskListSize();
  },

  clearList: () => {
    Todo.storeTasks.length = 0;
  },
};

// Referencias
const input = document.querySelector("#newTodo");
const form = document.querySelector("form");
const controlButton = document.querySelectorAll(".control-buttons button");
const showSizeTodoList = document.querySelector(".control-show .count");
const buttonClearList = document.querySelector('.clear-list')
const ToggleTheme = document.querySelector('.toggle');



form.addEventListener("submit", (e) => e.preventDefault());





// Events
function dragStart() {
  Todo.IndexCurrentTak = +this.closest("li").getAttribute("data-index");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  this.classList.remove("enter");
  const indexEnd = +this.getAttribute("data-index");
  Todo.swapListTasks(Todo.IndexCurrentTak, indexEnd);
}

function dragEnter() {
  this.classList.add("enter");
}

function dragLeave() {
  this.classList.remove("enter");
}

function filterList(event, arrayElements) {
  arrayElements.forEach((element) => {
    element.classList.remove("active");
  });

  function filterListActive(item) {
    return item.status === false && item;
  }

  function filterListComleted(item) {
    return item.status === true && item;
  }

  if (event.target.dataset.target === "all") {
    Todo.updateListDom(Todo.storeTasks);
  }

  if (event.target.dataset.target === "active") {
    event.target.classList.add("active");
    const filteresd = Todo.storeTasks.filter(filterListActive);

    Todo.updateListDom(filteresd);
  }

  if (event.target.dataset.target === "completed") {
    const filteresd = Todo.storeTasks.filter(filterListComleted);
    Todo.updateListDom(filteresd);
  }
}

function toggleClassButton() {
  const button = this;
  const ElementPai = this.parentNode.parentNode.parentNode;
  // console.log('pai',ElementPai.parentNode.parentNode)
  if (ElementPai.classList.contains("active")) {
    ElementPai.classList.remove("active");
  } else {
    ElementPai.classList.add("active");
  }

  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }

  Todo.toggleStatusTask(button.dataset.index);
}

function removeItemOfArray() {
  Todo.removeTaskToList(this);
}




// Add new item to list
input.addEventListener("keyup", (e) => {
  e.preventDefault();

  var key = e.which || e.keyCode;

  if (key == 13) {
    Todo.createListTaks(input.value);

    Todo.updateListDom(Todo.storeTasks, [
      addEventsToRemovingItemList,
      addEventChecked,
      addDragEventListener,
      Todo.viewTaskListSize
    ]);

    showSizeTodoList.innerHTML = Todo.viewTaskListSize();
  }
});

function addDragEventListener() {
  const draggables = document.querySelectorAll(".dragglabe");
  const draggablesListItens = document.querySelectorAll("#dropzone li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  draggablesListItens.forEach((item) => {
    item.addEventListener("dragover", (e) => dragOver(e));
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", dragDrop);
  });
}

function addEventsToRemovingItemList() {
  const closeTask = document.querySelectorAll(".dragglabe .close img");

  closeTask.forEach((element) => {
    element.addEventListener("click", removeItemOfArray);
  });
}

function addEventChecked() {
  const checkButton = document.querySelectorAll(".dragglabe .check");

  checkButton.forEach((button) => {
    button.addEventListener("click", toggleClassButton);
  });
}

// Add button to Filter
controlButton.forEach((element) => {
  element.addEventListener("click", (event) =>
    filterList(event, controlButton)
  );
});

buttonClearList.addEventListener('click', () => {
  Todo.clearList();
  Todo.updateListDom(Todo.storeTasks);
})

ToggleTheme.addEventListener('click', (event) => {

  const body = document.querySelector('.main');
 
  if(body.classList.contains('dark-theme')){
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    event.target.setAttribute('src', '/assets/images/icon-moon.svg');
  }else{
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    event.target.setAttribute('src', '/assets/images/icon-sun.svg');
  }
})