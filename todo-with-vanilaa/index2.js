/*
할 일
-label
-completed
-id
*/ 

let todolist = [{id:1 , label: "일어나기", completed: false, category:'category2'},{id:2, label:'아침 먹기',completed:false,category:null},{id:3, label:'학교가기',completed:false,category:null}];
let categorylist = [{label: "전체", deleted: false},{label:'category2',deleted:false},{label:'category3',deleted:false}];

const addTodo = (label) => {
    
    const todo= {

        id:new Date().getMilliseconds(),
        label:label,
        completed:false,
        category:null
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
            // " {label:work,...todo} 하면 값이 원래 값이랑 똑같이 나옴. ...todo는 원래 todo의 {label:value,key1:value }이걸 펼쳐주는데, lable:work로 해놓고 ...todo하면 원래 value로 오버라이딩됨
        }
        else{
            return {...todo};
        }

    })
    todolist = newTodoList;
}

const addCategory = (category) => {
    console.log({label:category,deleted:false});
    if (categorylist.indexOf({label:category,deleted:false})!==-1){
        alert('해당카테고리가 이미 존재합니다.');
    }
    else{
        categorylist=[...categorylist,{
            label:category,
            deleted:false}];
        console.log(categorylist);
        renderTodoList();
    }
}



const renderTodo = async (todo) => {

   const todoWrapper = document.createElement('div');
   todoWrapper.classList.add("todo-wrapper");
   //    todoWrapper.classList.add("completed-todo");
   //    todoWrapper.className="todo-wrapper";
   todoWrapper.id = todo.id;
   todoWrapper.draggable = true;

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
    if(work===null || work === ""){ // !work 가 제일 좋은 코드
        alert('할 일이 적혀있지 않습니다');
    }
    else{
     reviseTodo(todo.id,work);   
     renderTodoList();
    }
    renderTodoList();
   }



//    const content = document.getElementById('content');
   const category = document.getElementById(todo.category);
   const C = document.getElementById('전체');
   C.appendChild(todoWrapper); 
   if(category){
        category.appendChild(todoWrapper);
   }
//    content.appendChild(todoWrapper);
    // dragstart 제어
    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        // console.log(e.target.id);
    }
    const item = document.getElementById(todo.id);
    // dragstart 이벤트 추가
    item.addEventListener('dragstart', dragStart);


}
const renderCategory = () => {
    const content = document.getElementById('content');
    categorylist.forEach((catego) =>{
        const cate = document.createElement('fieldset');
        cate.id = catego.label;
        cate.droppable=true;
        const title = document.createElement('legend');
        title.innerText=catego.label;
        cate.appendChild(title);

        function dragEnter(e){
            e.preventDefault();
            // console.log(e);
        }
        function dragOver(e){
            e.preventDefault();
            // console.log(e);
        }
        function dragLeave(e){
            // console.log(e);
        }
        async function drop(e){
            const id = await e.dataTransfer.getData('text/plain');
            console.log(id);
            // id가 받아지는 경우가 있고 ,null인 경우가 있음
            const newTodoList = todolist.map((todo)=>{
                if (''+todo.id===id){
                    console.log('일치합니다');
                    return {...todo,category:catego.label};
                    }
                return todo;
            })
            todolist=newTodoList;
            console.log(todolist);
            // 원래는 todolist에서 id 일치하는 얘 찾아서 직접 추가하고 이전 꺼는 삭제하려고 했는데 복잡해서 그냥 처음부터 다시 로드함
            // function isRight(element)  {
            //     if(''+element.id === id)  {
            //       return true;
            //     }
            //   }
            // const ele = todolist.find(isRight);
            // console.log(ele);
            // renderTodo(ele);
            // console.log(todolist);
            renderTodoList();
        
        }
        cate.addEventListener('dragenter', dragEnter);
        cate.addEventListener('dragover', dragOver);
        cate.addEventListener('dragleave', dragLeave);
        cate.addEventListener('drop', drop);

        content.appendChild(cate);
    })
}

const renderTodoList = () => {
    const content = document.getElementById('content');
    content.innerHTML ="";
    renderCategory();
    todolist.forEach((todo) => {
        console.log(todo);
        renderTodo(todo);
  });

}



renderTodoList();