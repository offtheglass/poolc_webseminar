/*
할 일
-label
-completed
-id
*/ 

let todolist = [{id:1 , label: "일어나기", completed: false},{id:2, label:'아침 먹기',completed:false},{id:3, label:'학교가기',completed:false}];
let categorylist = [{label: "category1", deleted: false},{label:'category2',deleted:false},{label:'category3',deleted:false}];

const addTodo = (label) => {
    
    const todo= {

        id:new Date().getMilliseconds(),
        label:label,
        completed:false
    };
    todolist=[...todolist,todo]; // ...는 iterable을 펼치는 용도
};

const deleteTodo = (id) => {
    const newTodoList = todolist.filter((todo)=>{
        return todo.id!==id;
    });
    todolist=newTodoList;
    // const newTodoList = todolist.filter(({id})=> id !==targetId);  destructuring하는거임(구조분해할당)
    // 하고 const deleteTodo=(targetId)로 쓸 수 있음
};

const completeTodo = (targetId) => {
    //1번 방법: 찾고, 기존 거 빼고, 새로운 거 넣는다 -----느리다.
    // 2번 방법: map함수 사용
    const newTodoList = todolist.map((todo)=>{
        if (todo.id===targetId){
            if(todo.completed===false){
                return {...todo,completed:true};
            }
            else{
                return {...todo,completed:false};
            }
        }
        return todo;
    })
    todolist=newTodoList;
}

const reviseTodo = (targetId,work) => {
    
    const newTodoList = todolist.map((todo) => {
        if(todo.id === targetId) {
            return {...todo,label:work};
        }
        else{
            return {...todo};
        }

    })
    todolist = newTodoList;
}

const addCategory = (category) => {
    if (categorylist.indexOf({label:category,deleted:false})===-1){
        alert('해당카테고리가 이미 존재합니다.');
    }
    else{
        categorylist=[...categorylist,{
            label:category,
            deleted:false}];
        console.log(categorylist);
    }
}

const renderTodo = async (todo) => {
   const todoWrapper = document.createElement('div');
   todoWrapper.classList.add("todo-wrapper");
   //    todoWrapper.classList.add("completed-todo");
   //    todoWrapper.className="todo-wrapper";
   todoWrapper.id = todo.id;


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
        // todoWrapper.classList.toggle("completed-todo");
        // window.onload();
    }
   else {
       completeButton.innerText="미완료";
       todoWrapper.classList.toggle("completed-todo");
    //    window.onload();
    //    window.onload();
    }
   todoActionWrapper.appendChild(completeButton);

   completeButton.onclick = () => {
        // let div=document.getEleme/ntById(todo.id);
        // console.log(div);
        // div.classList.toggle("completed-todo");
        // event.target.parentElement.parentElement.classList.toggle("completed-todo");
        completeTodo(todo.id);
        renderTodoList();
    };

   const deleteButton = document.createElement('button'); 
   deleteButton.classList.add('todo-action');
   deleteButton.classList.add('delete');
   todoActionWrapper.appendChild(deleteButton); 
   deleteButton.innerText='삭제';
   deleteButton.onclick = () => {
    deleteTodo(todo.id);
    renderTodoList();
};
//    const actionWrapper = document.getElementById('action-wrapper');
//    actionWrapper.className='action-wrapper';

   const addButton = document.getElementById('add-action');
   addButton.onclick = () => {
    let work = prompt("할 일을 적어주세요");
    if(work===null || work ==""){
        alert('할 일이 적혀있지 않습니다');
    }
    else{
     addTodo(work);   
     renderTodoList();
    }
   };

   const addCategoryButton = document.getElementById("add-category"); 
   addCategoryButton.onclick = () => {
        let category = prompt("추가할 카테고리를 적어주세요");
        addCategory(category);
   }

   const reviseButton = document.createElement('button');
   reviseButton.classList.add('todo-action');
   reviseButton.classList.add('revise');
   todoActionWrapper.appendChild(reviseButton);
   reviseButton.innerText='수정';

   reviseButton.onclick = () => {
    let work = prompt("수정할 일을 적어주세요");
    if(work===null || work ==""){
        alert('할 일이 적혀있지 않습니다');
    }
    else{
     reviseTodo(todo.id,work);   
     renderTodoList();
    }
    renderTodoList();
   }

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