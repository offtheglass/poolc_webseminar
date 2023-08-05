// js의 자료형
console.log("1"+1);
console.log("1"-1);

// type coercion의 신기한 예

console.log("1"===1);

// const obj ={
//     a:'string',
//     b:42,
//     c:{
//         a:"nested string"
//     },

// }

// json은 javascript object notation ,서버에서 json받으면 js object로 변환해서 브라우져에서 처리하고 다시 보낼 때는 json형식으로 보냄

function name(a,b,c="dd"){
    return "가나다";
}
console.log(name())

const name2 = () => {
    return "가나다";
}

console.log(name2())

function introduce(name, age) {
    console.log('my name is ${name} and I am ${age} years old.');
    console.log(arguments[2]);    
}
introduce("john", 30);

const obj = {
    name:"John",
    age: 30,
    introduce: introduce,
};

obj.introduce("John",30);

function introduce2(name, age,log) {
    log('my name is ${name} and I am ${age} years old.');
    log(arguments[2]);    
}

introduce2("h", 30, console.log);

const data ={
    name:"John",
    age: 30,
};

// const isDatavalid = (data) => {
//     if(data.name&&data.age){
//         return true;
//     }
//     else{
//         return true
//     }
// };
const validateData = (data) =>{
    if(isDatavalid(data)){
        console.log(data.name);
    }
    else{
        console.log("data is not valid");
    }
};
// 위의 로직을 줄일 수 있음

const isDatavalid=(data)=>{
    return !!(data.name&&data.age); // data.name&&data.age는 리턴 타입이 boolean이 아님 그래서 !! 붙여주는 거임
                                /*
                                a&&b
                                if문 바깥에 들어가 있으면 a=true , b=false면 
                                b를 리턴함(a가 true니까), a=false, b=true면 a를 리턴함
                                이래서 아까 b.age 리턴해서 30이 리턴된거임
                                a || b
                                a:false b:true면 b 리턴.
                                a:true b:false면 a 리턴
                                */
};
console.log(false??"adult");
console.log(false||"adult");
