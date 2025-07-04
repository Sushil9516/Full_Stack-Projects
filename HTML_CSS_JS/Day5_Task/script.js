let todos = JSON.parse(localStorage.getItem("todos")) || []
let editIndex = -1

function renderTable() {
  const tableBody = document.getElementById("todoTableBody")
  tableBody.innerHTML = ""

  todos.forEach((todo, index) => {
    const row = document.createElement("tr")
    row.innerHTML = `
      <td>${todo.name}</td>
      <td>${todo.quantity}</td>
      <td><img src="${todo.profile}" alt="profile image"/></td>
      <td>
        <button class="edit-btn" onclick="editItem(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteItem(${index})">Delete</button>
      </td>
    `
    tableBody.appendChild(row)
  })
}

function addItem() {
  const name = document.getElementById("itemName").value.trim()
  console.log(name)

  const quantity = document.getElementById("quantity").value.trim()
  const profile = document.getElementById("profile").value.trim()

  if (name && quantity && profile) {
    todos.push({ name, quantity, profile })
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTable()
    clearForm()
  } else {
    alert("Please fill all fields!")
  }
}

function editItem(index) {
  const todo = todos[index]
  document.getElementById("itemName").value = todo.name
  document.getElementById("quantity").value = todo.quantity
  document.getElementById("profile").value = todo.profile

  editIndex = index
  document.getElementById("addBtn").style.display = "none"
  document.getElementById("updateBtn").style.display = "inline-block"
}

function updateItem() {
  const name = document.getElementById("itemName").value.trim()
  const quantity = document.getElementById("quantity").value.trim()
  const profile = document.getElementById("profile").value.trim()

  if (name && quantity && profile && editIndex !== -1) {
    todos[editIndex] = { name, quantity, profile }
    localStorage.setItem("todos", JSON.stringify(todos))
    renderTable()
    clearForm()

    document.getElementById("addBtn").style.display = "inline-block"
    document.getElementById("updateBtn").style.display = "none"
    editIndex = -1
  } else {
    alert("Invalid update!")
  }
}

function deleteItem(index) {
  todos.splice(index, 1)
  localStorage.setItem("todos", JSON.stringify(todos))
  renderTable()
}

function clearForm() {
  document.getElementById("itemName").value = ""
  document.getElementById("quantity").value = ""
  document.getElementById("profile").value = ""
}

// Initialize
renderTable()
