const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('#todos-container');


addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length == '')
        return;

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('li');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';
  
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

   
    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    todosContainer.addEventListener('click', function(e){
        if(e.target.tagName ==="LI"){
            e.target.classList.toggle("checked");
        }
        });


        textInputField.value = "";
    

});