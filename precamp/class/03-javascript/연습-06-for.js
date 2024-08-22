let persons = [
    {name: "철수", age:17},
    {name: "영희", age:63},
    {name: "철수1", age:14},
    {name: "철수2", age:12},
    {name: "철수3", age:16},
    {name: "철수4", age:12}
]
undefined
for(let count = 0; count < persons.length; count++)  {

    if(persons[count].age >= 19){
        console.log("성인입니다")
    else{
        console.log("미성년자입니다")
    }
        
}
VM2113:5 Uncaught SyntaxError: Unexpected token 'else'
for(let count = 0; count < persons.length; count++)  {

    if(persons[count].age >= 19){
        console.log("성인입니다")
    } else{
        console.log("미성년자입니다")
    }
        
}
VM2133:6 미성년자입니다
VM2133:4 성인입니다
4VM2133:6 미성년자입니다
undefined
for(let count = 0; count < persons.length; count++)  {

    if(persons[count].age >= 19){
        console.log(persons[count].name+"님은 성인입니다")
    } else{
        console.log(persons[count].name+"님은 미성년자입니다")
    }
        
}
VM2378:6 철수님은 미성년자입니다
VM2378:4 영희님은 성인입니다
VM2378:6 철수1님은 미성년자입니다
VM2378:6 철수2님은 미성년자입니다
VM2378:6 철수3님은 미성년자입니다
VM2378:6 철수4님은 미성년자입니다



// 연습

const fruits = [
    {number:1 , title:"레드향"} ,
    {number:2 , title:"샤인머스켓"} ,
    {number:3 , title:"산청딸기"} ,
    {number:4 , title:"한라봉"} ,
    {number:5 , title:"사과"} ,
    {number:6 , title:"애플망고"} ,
    {number:7 , title:"딸기"} ,
    {number:8 , title:"천혜향"} ,
    {number:9 , title:"과일선물세트"} ,
    {number:10 , title:"귤"} 
];
undefined

for(i=0; i<9;i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
VM2846:2 1 레드향
VM2846:2 2 샤인머스켓
VM2846:2 3 산청딸기
VM2846:2 4 한라봉
VM2846:2 5 사과
VM2846:2 6 애플망고
VM2846:2 7 딸기
VM2846:2 8 천혜향
VM2846:2 9 과일선물세트
for(i=0; i<9;i++){
    console.log(`${fruits[i].number}  ${fruits[i].title}`)
}
VM2934:2 1  레드향
VM2934:2 2  샤인머스켓
VM2934:2 3  산청딸기
VM2934:2 4  한라봉
VM2934:2 5  사과
VM2934:2 6  애플망고
VM2934:2 7  딸기
VM2934:2 8  천혜향
VM2934:2 9  과일선물세트

// 연습

Math.floor( Math.random() * 1000000 )
371560
String ( Math.floor( Math.random() * 1000000 ))
'137043'
let result = String ( Math.floor( Math.random() * 1000000 )).padStart(6,"0")
result
'456297'
result
'456297'