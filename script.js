const moreInfo=()=>{
    let info=document.querySelector('.infoDiv')
info.innerHTML=" answer the following questions to get started! each correct answer is +1point,wrong answers count as 0 points!";
}
const helpImage=()=>{
    let imageContainer=document.querySelector('.imageDiv')
    let imgTag=document.createElement('img')
    imgTag.src="https://www.shutterstock.com/image-vector/earth-globe-vector-icon-illustration-260nw-1545200537.jpg"
    imageContainer.append(imgTag)
}
//lets write a rough sketch of functions that will be needed!//

const hintHelp=()=>{
    alert("think logically about world trends!")
}
// Major functionality will begin down here with these two functions!//

let bonusQuestion=10;
let questionAnsweredOne=0;
let questionAnsweredTwo=0;

let questionAnsweredContainer=document.querySelector('.questionsAnswered')
let pointsEarnedContainer=document.querySelector('.pointsEarned')

let questionAnsweredContainer2=document.querySelector('.questionsAnsweredTwo')
let pointsEarnedContainer2=document.querySelector('.pointsEarnedTwo')

//move the container//
let pointValue1=0
let pointValue2=0
const playerFunction1=()=>{
    questionAnsweredOne++;
    pointValue1+=5;

    
    
    questionAnsweredContainer.innerHTML=questionAnsweredOne;
    pointsEarnedContainer.innerHTML=pointValue1

    

}
//this is the function for the 2nd player!
const playerFunction2=()=>{
    questionAnsweredTwo++
    pointValue2+=5
    
    questionAnsweredContainer2.innerHTML=questionAnsweredTwo;
    pointsEarnedContainer2.innerHTML=pointValue2


}
//this function determines the current winner//

const currentWinner=()=>{
    let currentPoint=document.querySelector('.winnerDiv')
    if(pointValue1>pointValue2){
        currentPoint.innerHTML=" player one is in the lead with "+pointValue1+ "points!";
    }
    else if(pointValue1===pointValue2){
        currentPoint.innerHTML='Its a tie game!'
    }
    else{
        currentPoint.innerHTML=" player two is in the lead with "+pointValue2+ "points!";

    }


    

}
    










// A wrong answer awards 0 points, however we still increment # of questions answered!//
const incorrectAnsw=()=>{
    alert("sorry, that is incorrect!")
    questionAnsweredOne++;
     questionAnsweredContainer.innerHTML=questionAnsweredOne;

}



