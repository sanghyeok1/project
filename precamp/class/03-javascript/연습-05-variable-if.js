// 데이터 타입, 연산자 실습
1+1
2
1+ "만원"
'1만원'
1 + "1"
'11'
1 - "1"
0
"코드"+"캠프"
'코드캠프'
"123" == 123
true
"123" === 123
false
true && true
true
true && false
false
false || true
true
!false
true
!true
false

//조건문 실습1

if(1+1 ===2){
    console.log("정답입니다")
} else {
console.log("틀렸습니다")
}
VM315:2 정답입니다
undefined
if(true){
    console.log("정답입니다")
} else {
console.log("틀렸습니다")
}
VM332:2 정답입니다
undefined
if(!true){
    console.log("정답입니다")
} else {
console.log("틀렸습니다")
}
VM349:4 틀렸습니다
undefined
if(0){
    console.log("정답입니다")
} else {
console.log("틀렸습니다")
}
VM369:4 틀렸습니다
undefined
if(1){
    console.log("정답입니다")
} else {
console.log("틀렸습니다")
}

//조건문 실습 2
const profile = {
    name: "철수",
    age : 12,
    school:"다람쥐초등학교"
}
undefined
if(profile.name>=20){
    alert("성인입니다")
}
else if(profile.name<=7){
    alert("어린이입니다")
}
else {
     alert("학생입니다")
}
undefined
if(profile.name>=20){
    console.log("성인입니다")
}
else if(profile.name<=7){
    alert("어린이입니다")
}
else {
     alert("학생입니다")
}
undefined
if(profile.name>=20){
    alert("성인입니다")
}
else if(profile.name>=7){
    alert("학생입니다")
}
else if(profile.name>0){
     alert("어린이입니다")
}
undefined
if(profile.name>=20){
    alert("성인입니다")
}
else if(profile.name<=7){
    alert("어린이입니다")
}
else {
     alert("학생입니다")
}
undefined
if(profile.name>=20){
    alert("성인입니다")
}
else if(profile.name>=7){
    alert("학생입니다")
}
else if(profile.name>0){
     alert("어린이입니다")
}
else {
     alert("잘못입력하셨습니다")
}

