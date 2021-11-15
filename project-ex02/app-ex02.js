/*
douzone-jeon-math npm 모듈 테스트(모듈 패키지: 로컬 배포)

$ npm i ../douzone-wjn135-math
명령으로 설치 후 테스트 할 것
*/

var dzMath = require('../douzone-wjn135-math/douzone-wjn135-math');

console.log(dzMath.sum(10, 20, 30, 40, 50));
console.log(dzMath.max(10, 20, 30, 40, 50));
console.log(dzMath.min(10, 20, 30, 40, 50));