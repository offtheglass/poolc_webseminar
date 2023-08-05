
// 1. Note ID를 가져온다(1초)
// 2. Note ID를 통해 Note를 가져온다(2초)
// 3. 가져온 Note를 log로 찍는다.

// const getNoteID = (onGetNoteID) => {
//     setTimeout(()=>{
//         onGetNoteID(1)
//     },1000);
// }

const getNoteID = () => {
    return new Promise((resolve) => {
        setInterval(() => {
            resolve("노트");
        }, 1000);
    }
    )
}


const getNote = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>{
                resolve('노트');
            },2000
        )
    }
    )
}

// const showNote = async (message) => {
//     () => {
//         setTimeout(() => {
//            return message;
//         }, 1000);
//     }
        
// }  이러면 note2가 undefined
// 얘는 함수 정의만 해놓은 거라서 실행이 일단 안 됨. 

// const showNote = async (message) => {
//     return () => {
//         setTimeout(() => {
//            return message;
//         }, 1000);
//     }
// }  이러면 note2가 [Function (anonymous)]

// 위의 두 경우는 async로 감싸면 promise가 반환된다는데 왜 note2 note가 안 되는지?

// const showNote = async (message) => {
//     return message;
// }  이러면 note가 note(async붙여서 promise가 리턴되는 듯)

const showNote = () => {
    return new Promise((resolve) => {
        setTimeout(
            ()=>{
                resolve('노트');
            },2000
        )
    }
    )
} // 이러면 note가 노트  
// resolve는 new Promise의 callback함수의 인자다. 
// 그래서 resolve()하면 promise가 fulfilled 상태가 되는데
// 그 뒤 then을 이용해서 처리결과값을 받을 수 있는데
// 이 때 resolve(A) 이런 식으로 써주면 A가 then()에 넘겨주는 처리결과값이 된다. 


const fun = async () =>{
    const noteId = await getNoteID();
    console.log(noteId);
    const note = await getNote(noteId);
    const note2 = await showNote(note);
    console.log(note2);
    console.log(noteId+"gkdl");
};

fun();
// 서버와의 통신은 비동기다. 이거 동기로 해버리면 데이터 받을 때까지 컴퓨터가 멈춰버림. 그래서 비동기로 하고 데이터를 받고 그 이후에 실행하는 부분은 동기적으로 하는 거임 . 그 방법이 callback도 있고
// async도 있고, promise도 있고 한거임