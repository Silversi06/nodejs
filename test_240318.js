
// 1. Template Literal  (백틱 사용하기)
// 다음 변수를 이용하여 콘솔에 오른쪽 주석과 같이 나타내시오.
const name1 = 'Alice';
const age1 = 30;
console.log("제 이름은 "+name1+"이고, "+"나이는 "+age1+"살 입니다"); // 제 이름은 Alice이고, 나이는 30살입니다.

// 2. 화살표 함수 문제: 주어진 함수를 화살표 함수로 변환해보세요.
// [함수명 : greet_2 ]
function multiply(a, b) {
  return a * b;
}

greet_2 = (a,b) => {
    return a * b;
}

// 3. 화살표 함수 문제2 _ Arrow Function
const addNumbers = (num1, num2) => num1 + num2;
console.log(addNumbers(7,5)); //addNumbers를 사용하여 7+5를 수행하시오.



// 4. object의 속성을 추가하고 활용하기 : 주어진 객체에 새로운 속성을 추가해보세요.
const person4 = {
  name: 'Alice',
  age: 25,
  height: 170
};
console.log(person4.name, person4.age);


// 4-1. person 객체에 height 속성을 추가해보세요 (height 값은 170)


// 4-2. person 객체의 name 속성과 age 속성을 출력해보세요


// 5. 동등 연산자와 일치 연산자
console.log(1 == "1"); 
console.log(1 === "1"); 
// 5-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는...")  
console.log("==는 수만 비교를 하는 것이고, ===는 수와 자료형을 함께 비교하는 것이다.")

// 6. null과 undefined
let aa = null;
let bb;
console.log(aa == bb); 
console.log(aa === bb); 
// 6-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는...")
console.log("aa는 둘 다 값이 없기 때문에 true가 나오고, bb는 둘이 자료형이 다르기 때문에 false가 나온다")


// 7. JSON 데이터를 객체로 그리고 문자열로 바꾸는 퀴즈:
// JSON 형식의 문자열
const jsonStr7 = '{"name":"Alice","age":30}';

// JSON 문자열을 객체로 변환하여 로그에 나타내보세요.
const obj = JSON.parse(jsonStr7);

// 객체의 age 값을 출력해보세요.
console.log(obj.age)


// 객체를 JSON 문자열로 변환하여 로그에 나타내보세요.
console.log(JSON.stringify(obj))


// 8. Nullish Coalescing Operator
const name8 = '';
const displayName1 = name8 ?? 'Anonymous';
const displayName2 = name8 || 'Anonymous';

console.log("displayName1 : " + displayName1); 
console.log("displayName2 : " + displayName2);

// 8-1. 다음 값이 다른 이유는?
console.log("값이 다른 이유는...") 
console.log("첫번째는 name8이 비었기 때문에 아무것도 출력되지 않는것이고, 두번째는 name8이 false 이기 때문에 출력된다")
