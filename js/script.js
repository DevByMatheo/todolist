function addElement (){
    const addButton = document.querySelector('#add-btn');
    const newTaskInput = document.querySelector('#new-task');
    const listTask = document.querySelector('.listTask');

    addButton.addEventListener("click", () => {
        const newLi = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('span');
        label.textContent = newTaskInput.value.trim();

        const deleteImage = document.createElement('img');
        deleteImage.src = "https://devbymatheo.github.io/todolist/assets/delete.png"; 
        deleteImage.classList.add('delete-btn-image');
        deleteImage.addEventListener('click', (e) => {
            e.stopPropagation()
            listTask.removeChild(newLi)
        });

        newLi.append(checkbox);
        newLi.append(label);
        newLi.append(deleteImage);

        listTask.append(newLi);
        newTaskInput.value = '';  
    })
}

document.addEventListener('DOMContentLoaded', addElement);