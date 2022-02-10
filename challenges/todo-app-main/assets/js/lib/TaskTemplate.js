const TaskTemplate =  (currentTask, index) => {
  return `
  <div draggable="true" class="dragglabe">

    <div class="status">
      <span class="check" data-index="${index}"></span>
    </div>

    <span class="currentTask">${currentTask}</span>

    <div class="close" aria-label="Remove item from list">
      <img src="./assets/images/icon-cross.svg" alt="Remove item from list" data-index="${index}">
    </div>
  </div>
  `;
};

export default TaskTemplate;