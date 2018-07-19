const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // get a name for todo from user
  const newItem = prompt()
  // tag name as TODO_TEXT in CSS
  newItem.className = classNames.TODO_TEXT

  // increment counters
  uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1
  itemCountSpan.textContent = parseInt(itemCountSpan.textContent) + 1

  // create a delete button
  const delButton = document.createElement("button")
  // tag it as delete button
  delButton.className = classNames.TODO_DELETE
  // make it say delete
  delButton.appendChild(document.createTextNode("DELETE"))
  // specify what it does when clicked
  delButton.onclick = function() {
    // decrement uncheckedCount if it is not checked
    if(!delButton.nextSibling.checked){
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1
    }
    // decrement itemcount
    itemCountSpan.textContent = parseInt(itemCountSpan.textContent) - 1
    delButton.parentNode.parentNode.removeChild(delButton.parentNode)
  }

  // create a checkbox
  const checkBox = document.createElement("input")
  checkBox.type = 'checkbox'
  // tag it as checkbox in CSS
  checkBox.className = classNames.TODO_CHECKBOX
  // specify what it does when clicked
  checkBox.onclick = function() {
    if(this.checked){
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) - 1
    }else{
      uncheckedCountSpan.textContent = parseInt(uncheckedCountSpan.textContent) + 1
    }
  }

  // create a list element
  const bullet = document.createElement("li")
  // classify it as a TODO_ITEM in CSS
  bullet.className = classNames.TODO_ITEM
  // add delete button to list element
  bullet.appendChild(delButton)
  // add checkbox to the list element
  bullet.appendChild(checkBox)
  // add text to the list element
  bullet.appendChild(document.createTextNode(newItem))

  // add list element to list
  list.appendChild(bullet)
}