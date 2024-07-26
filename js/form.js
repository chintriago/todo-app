const form = document.getElementById('form');
let formMiddle = document.querySelector('.form-middle');
let formItemsMiddleList = document.getElementsByClassName('form-items-middle');
let formInput = document.getElementById('form-input');
let crossesList = document.getElementsByClassName('crosses');
let todoItem = document.getElementById('todo-item');
let todoCount = document.getElementById('todo-count');

// Loops through each .form-items-middle and checks
// for .crosses clicked then removes that Element.
function todoItemRemover() {
    for (let i = 0; i < formItemsMiddleList.length; i++) {
        crossesList[i].addEventListener('click', function () {
            formItemsMiddleList[i].classList.add('hide');
        });
    };
}

todoItemRemover();

// Clone is made from todo item, then when enter is pressed
// the form input text is cleared. Then the clones span text is
// copied from the form input. Then it is appended to the last child
// of the form middle container and class hide is removed for visibilty.
// Finally, prevent default behavior is added and todoItemRemover function is called in case of deletion. 
function todo(event) {
    let clone = todoItem.cloneNode(true);
    let cloneSpan = clone.querySelector('span');
    let inputValue = formInput.value;
    if (event.keyCode === 13) {
        event.preventDefault();
        formInput.value = '';
        cloneSpan.innerText = inputValue;
        formMiddle.appendChild(clone);
        clone.classList.remove('hide');
        todoItemRemover();
    };
}

formInput.addEventListener("keydown", todo);