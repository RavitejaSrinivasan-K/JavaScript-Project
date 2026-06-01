//CONDITIONAL STATEMENTS

//IF, ELSE IF, ELSE,    SWITCH 


let marks = 71

if(marks <= 100 && marks >= 85){
    console.log("GRADE : A")
}
else if(marks <= 84 && marks >= 65){
    console.log("GRADE : B")
}
else if(marks <= 64 && marks >= 35){
    console.log('GRADE : C')
}
else{
    console.log("FAILED")
}



//SWITCH
let day = 101

switch(day){

    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednessday")
        break
    case 4: 
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    default :
        console.log("Happy Its WeekEnd...") 
        break                   

}



//LOOPS

console.log("----FOR----")
//FOR - initialization; Condition ; Increment/Decrement

for(let i=1; i <= 5 ; i++){
    console.log(i)
}


console.log("----WHILE----")
//WHILE
// initialization; 
// Condition ; 
// Increment/Decrement

let j=1

while(j <= 5 ){
    console.log(j)
    j++
}



console.log("----DO WHILE----")
//DO WHILE
// initialization; 
// Increment/Decrement
// Condition ; 

let k=1

do{
    console.log(k)
    k++
}
while(k <= 5)



  