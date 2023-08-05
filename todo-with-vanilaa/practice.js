/*
할 일
-label
-completed
-id
*/ 

let todolist = [{id:1 , label: "일어나기", completed: false},{id:2, label:'아침 먹기',completed:false},{id:3, label:'학교가기',completed:'false'}];


const renderTodo = async (todo) => {
    const todoWrapper = document.createElement('div');
    todoWrapper.classList.add("todo-wrapper");
    todoWrapper.id = todo.id;
    
    console.log(todoWrapper.id);
    console.log(todoWrapper);
    window.onload=()=>{console.log(document.getElementById(todo.id));}
    
    const todoLabel = document.createElement('p');
    todoLabel.className="todo-label";
    todoWrapper.appendChild(todoLabel)
    todoLabel.innerText=todo.label;
    
    const todoActionWrapper = document.createElement('div');
    todoActionWrapper.className="todo-action-wrapper";
    todoWrapper.appendChild(todoActionWrapper);
    
    const completeButton = document.createElement('button');
    completeButton.classList.add('todo-action');
    completeButton.classList.add('complete');
    
    if (!todo.completed){
         completeButton.innerText="완료";
    }
    else {
        completeButton.innerText="미완료";
    }
    todoActionWrapper.appendChild(completeButton);
 
    
 
    const deleteButton = document.createElement('button'); 
    deleteButton.classList.add('todo-action');
    deleteButton.classList.add('delete');
    todoActionWrapper.appendChild(deleteButton); 
    deleteButton.innerText='삭제';
    
 
    const addButton = document.getElementById('add-action');
    
    const content = document.getElementById('content');
    content.appendChild(todoWrapper);
 
 }
 
 const renderTodoList = () => {
     const content = document.getElementById('content');
     content.innerHTML ="";
     todolist.forEach((todo) => {
         renderTodo(todo);
     })
 }
 
 
 
 renderTodoList();