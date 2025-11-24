// Initialize Notyf
const notyf = new Notyf({
  duration: 2000, // 2 seconds
  position: { x: 'right', y: 'top' },
});



let input=document.getElementById("display");
let isWriteNumber=false;
let isSignRepeat=true;

let displayNumber =(number)=>{
  isWriteNumber=true;
  input.value+=number;
  isSignRepeat=true;
}

let displaySign =(sign)=>{
    if(isSignRepeat){
        if(isWriteNumber){
        input.value+=sign;
        isSignRepeat=false;
        }else{
            notyf.error('write number first');
        }
    }else{
         notyf.error('error');
    }
}

let removeChar=()=>{
    let text=input.value;
    let textArr=text.split("");
    input.value="";
    textArr.splice(textArr.length-1,1);
    console.log(textArr);
    console.log(textArr[textArr.length-1]);

    
    if (textArr[textArr.length-1]=="+" || textArr[textArr.length-1]=="-" || textArr[textArr.length-1]=="*" || textArr[textArr.length-1]=="/" || textArr[textArr.length-1]=="%" ) {
          isSignRepeat=false;
          isWriteNumber=true;
        }else{
          isSignRepeat=true;
          isWriteNumber=false;
        }

    let afterRemovedChar=textArr.join("");
    console.log(afterRemovedChar);
    input.value=afterRemovedChar;

    // if (textArr.length>0) {
    //   isWriteNumber=true;
    // }
    
    // isWriteNumber=true;
}
let num1;
let num2;
let result;
let numbers=[];
let signs=[];
let currentNumber=0;

let calculate=()=>{
    let text=input.value;
    let textArr=text.split("");
    // console.log(textArr);
    
    input.value="";
    currentNumber="";     

    gettingNumbers(textArr);
    console.log(numbers);

    let index=0;
    let modulusRepeat=0;
    let divideRepeat=0;
    let multiplyRepeat=0;
    let addRepeat=0;
    let subtractRepeat=0;
    let startCalculate =false;

    
    signs.forEach(item => {
      if (item=="%") {
          modulusRepeat++;
      }else if(item=="/"){
          divideRepeat++
      }else if(item=="*"){
          multiplyRepeat++
      }else if(item=="+"){
          addRepeat++
      }else if(item=="-"){
          subtractRepeat++
      }
    
    })

    if (signs.length*2==numbers.length) {
      startCalculate=true;
    }else{
      input.innerHTML = "";
      isSignRepeat=true;
      isWriteNumber=false;
      notyf.error("Complete the statement");
      numbers=[]
      // signs=[]
    }


   

while (index<signs.length && startCalculate) { 

    if (signs.includes("%")) {

      while (modulusRepeat>0) {
        let i= signs.indexOf("%");
        num1=numbers[i];
        num2=numbers[i+1];
        
        signs.splice(i,1);
        console.log("signs array"+signs);
        
        let answer=reminderNumbers(num1,num2);
        numbers.splice(i,2,answer);
        console.log(numbers);
        modulusRepeat--;
        
      }}
          
      if (signs.includes("/")) {

        while (divideRepeat>0) {
            let i= signs.indexOf("/");
              num1=numbers[i];
              num2=numbers[i+1];

              signs.splice(i,1);
              console.log("signs array"+signs);
              
              let answer=divideNumbers(num1,num2);
              numbers.splice(i,2,answer);
              console.log(numbers);
              divideRepeat--;
              
          }}
          
    if (signs.includes("*")) {
      while (multiplyRepeat>0) {
            let i= signs.indexOf("*");
              num1=numbers[i];
              num2=numbers[i+1];

              signs.splice(i,1);
              console.log("signs array"+signs);

              let answer=multiplyNumbers(num1,num2);
              numbers.splice(i,2,answer);
              console.log(numbers);
              multiplyRepeat--;
              
          }}
          
    if (signs.includes("-")) {

      while (subtractRepeat>0) {

            let i= signs.indexOf("-");
              num1=numbers[i];
              num2=numbers[i+1];

              signs.splice(i,1);
              console.log("signs array"+signs);

              let answer=subNumbers(num1,num2);
              numbers.splice(i,2,answer);
              console.log(numbers);
              subtractRepeat--;
                
          }}

    if (signs.includes("+")) {
          while (addRepeat>0) {

        let i= signs.indexOf("+");
          num1=numbers[i];
          num2=numbers[i+1];

          signs.splice(i,1);
          console.log("signs array"+signs);
          
          let answer=addNumbers(num1,num2);        
          numbers.splice(i,2,answer);
          console.log(numbers);
          addRepeat--;
          
      }}
      

}

// console.log(numbers.join(""));
  let toAcheivefinalAnswer=numbers.join("");
  let finalAnswer=decimalHandling(toAcheivefinalAnswer);
  console.log(finalAnswer);

   input.value=finalAnswer;  
       
      numbers=[]
      signs=[]

     
    }

let AfterPointIdentifying;

let decimalHandling=(num)=>{

  let splitArr=num.split("");

  if (splitArr.includes(".")) {
    AfterPointIdentifying =splitArr.join("");
    let resultdecimal= Number(AfterPointIdentifying).toFixed(3);
    return resultdecimal;
    
  }else{
    AfterPointIdentifying =splitArr.join("");
    return AfterPointIdentifying;
  } 

  // splitArr="";


}

    




let addNumbers=(a,b)=>{
    result=Number(a)+Number(b);
    // console.log(result);
    return result
    
  
  }
let subNumbers=(a,b)=>{
   result=Number(a)-Number(b);
    return result
  }
let multiplyNumbers=(a,b)=>{
    result=Number(a)*Number(b);
 return result
  }
let divideNumbers=(a,b)=>{
    result=Number(a)/Number(b);
    return result
  }
let reminderNumbers=(a,b)=>{
    result=Number(a)%Number(b);
    return result
  }
  
  
let gettingNumbers=(list)=>{
   list.forEach( char => {
      if (char >= "0" && char <= "9" || char==".") {
        currentNumber += char;
      }else {
        numbers.push(Number(currentNumber));
        currentNumber="";
         signs.push(char);
        }
        
      })
      ;
      if (currentNumber !== "") {
        numbers.push(Number(currentNumber));
      }

       console.log("signs "+signs);  
       console.log("numbers "+numbers); 
}

let clearAll=()=>{
 input.value="";
   isWriteNumber=false;
}

















