const a = () => {
    setTimeout(() => {
        console.log("A")
        setTimeout(()=>{
            console.log("D")
        },1000);

    }, 1000);
    console.log("C")

}
const b = () => {
    console.log("B");
}
a();
b();
// a함수가 먼저 call됐지만 a가 끝나기 전에 기다려주지 않고 b를 실행(a가 호출하는 settimeout이 비동기라서 이렇게 하는 거임, a,b는 동기함수임)
// 비동기를 동기적으로 처리하는 방법으로 call back 함수를 쓸 수 있음. 근데 이러면 콜백 지옥이 일어나기 쉬움 => 그래서 나온 게 promise

const promise = () => {
    let a = 1;
    
    const fun = new Promise((resolve)=>{ //resolve는 '비동기 끝' 이라는 뜻임
        setTimeout(()=>{
            console.log(a++);
            resolve();
        },1000)
    });

    fun.then(fun()).then(fun()).catch();  // 이렇게 하면 callback보다 간단하게 쓸 수 있음
}