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
    let afterRemovedChar=textArr.join("")
    console.log(afterRemovedChar);
    input.value=afterRemovedChar;
    isWriteNumber=true;
    isSignRepeat=true;
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
    input.value="";
    currentNumber="";     

    gettingNumbers(textArr);

    console.log(numbers);

   
let index=0;

while (index<signs.length) { 
        if (signs.includes("%")) {

          let i= signs.indexOf("%");
          num1=numbers[i];
          num2=numbers[i+1];
          
          signs.splice(i,1);
          console.log("signs array"+signs);
          
          let answer=reminderNumbers(num1,num2);
          numbers.splice(i,2,answer);
          console.log(numbers);
          
          
      }
      
      if (signs.includes("/")) {
        let i= signs.indexOf("/");
          num1=numbers[i];
          num2=numbers[i+1];

          signs.splice(i,1);
          console.log("signs array"+signs);
          
          let answer=divideNumbers(num1,num2);
          numbers.splice(i,2,answer);
          console.log(numbers);
          
      }
      
      if (signs.includes("*")) {
        let i= signs.indexOf("*");
          num1=numbers[i];
          num2=numbers[i+1];

          signs.splice(i,1);
          console.log("signs array"+signs);

          let answer=multiplyNumbers(num1,num2);
          numbers.splice(i,2,answer);
          console.log(numbers);
          
      }
      
      if (signs.includes("-")) {
        let i= signs.indexOf("-");
          num1=numbers[i];
          num2=numbers[i+1];

          signs.splice(i,1);
          console.log("signs array"+signs);

          
          
          let answer=subNumbers(num1,num2);
          numbers.splice(i,2,answer);
          console.log(numbers);
            
      }

      if (signs.includes("+")) {
        let i= signs.indexOf("+");
          num1=numbers[i];
          num2=numbers[i+1];

          signs.splice(i,1);
          console.log("signs array"+signs);
          
          let answer=addNumbers(num1,num2);        
          numbers.splice(i,2,answer);
          console.log(numbers);
          
      }
      

} 

      input.value=numbers
      numbers=[]
      signs=[]

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
   list.forEach( (char) => {
      if (char >= "0" && char <= "9") {
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
}
















