import {a} from "./module-esm.js"; /// import는 무조건 제일 상단에 적어야함
console.log("Hello World!");
console.log(a);               

// esm, commonjs를 혼용해서 쓰는 에러는 확장자를 mjs로 하면 둘 다 쓸 수 있긴 함(근데 권장되지는 않음, 한 프로젝트면 esm이든 commonjs 둘 중 하나만 쓰는 게 좋음)