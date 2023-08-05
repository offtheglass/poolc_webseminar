
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

const showNote = (message) => {
    console.log(message)
}

getNote()
    .then((noteID)=>getNote(noteID))
    .then((note) => showNote(note))

// 서버와의 통신은 비동기다. 이거 동기로 해버리면 데이터 받을 때까지 컴퓨터가 멈춰버림. 그래서 비동기로 하고 데이터를 받고 그 이후에 실행하는 부분은 동기적으로 하는 거임 . 그 방법이 callback도 있고
// async도 있고, promise도 있고 한거임