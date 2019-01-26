// shallow copy
// var obj = { a: 1 };
// var copy = obj;
// obj.a = 2; //.점은 레퍼런스 연산자
// console.log(obj);
// console.log(copy); // 1이 아니라 2이다.

// deep copy
var obj = { a: 1 };
// var copy = Object.assign({}, obj); //새로운 메모리 주소 할당
// var copy = {...obj}; //위와 같은 소스
// obj.a = 2;
// console.log(obj);
// console.log(copy);


var arr = [1, 2, 3, 4, 5];
// 깊은 복사(deep copy)
// 복사하는 객체를 수정해도 원본 객체(arr)는 유지된다.
var arrCopy = arr;
arrCopy = arrCopy.slice(0);
// 또는 arrCopy = JSON.parse(JSON.stringify(arr)); // arr객체를 문자열로 변환후 다시 객체로 파싱하여 새로운 객체 저장 (원소가 객체일경우 참조값이 사라지는 단점)
arrCopy.shift(); // test 첫번째 원소 삭제
console.log(arr);     // [1, 2, 3, 4, 5]
console.log(arrCopy); // [2, 3, 4, 5]


