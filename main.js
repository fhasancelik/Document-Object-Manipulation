let but=[0,1,2,3,4,5,6,7,8,9,"+","-","/","*","=","C"]
let myArray = [];

let operators=["+","-","/","*","="];
let num=[0,1,2,3,4,5,6,7,8,9]

let myDiv=document.getElementById("mymainDiv");
let numbersDiv=document.getElementById("mynumbersdiv");
let operatorsDiv=document.getElementById("myoperatorsdiv");
let inputsDiv=document.getElementById("inputssdiv");
var myNumber;


let myInput=document.createElement("input");

inputsDiv.appendChild(myInput)


let mySonuc=document.createElement("input");

inputsDiv.appendChild(mySonuc)
myInput.classList.add("inputType")
mySonuc.classList.add("inputType")

let deg1;
let deg2;
let toplam;
let deger;

function findButton(buttonValue){
if(buttonValue=="+"){

  let say1= myArray.splice(0,myArray.length);
  deg1=say1.join("");
 myArray.push(buttonValue)
 deger="+";
 
 
 

}else if (buttonValue=="/"){
  let say1= myArray.splice(0,myArray.length);
  deg1=say1.join("");
 myArray.push(buttonValue)
 deger="/";
}else if (buttonValue=="-"){
  let say1= myArray.splice(0,myArray.length);
  deg1=say1.join("");
 myArray.push(buttonValue)
 deger="-";
}
else if (buttonValue=="*"){
  let say1= myArray.splice(0,myArray.length);
  deg1=say1.join("");
 myArray.push(buttonValue)
 deger="*";
}else if (buttonValue=="C"){
mySonuc.value=""
}
else if (buttonValue=="="){
  let say2=myArray.splice(1,myArray.length)

  deg2=say2.join("");

  toplam=Number(deg1)+Number(deg2);

bolum=Number(deg1)/Number(deg2);
carpım=Number(deg1)*Number(deg2);
fark=Number(deg1)-Number(deg2);

  if(deger=="+"){
    mySonuc.value=toplam;
  }else if(deger=="/"){
    mySonuc.value=bolum;
  }else if(deger=="-"){
    mySonuc.value=fark;
  }else if(deger=="*"){
    mySonuc.value=carpım;
  }else{
    null
  }




myArray.length=0



}else{

  myArray.push(parseInt(buttonValue))

}


}




      
    


but.forEach(element => {
  
    const myOperator=document.createElement("button")
if(element=="+"){
  operatorsDiv.appendChild(myOperator)
}else if(element=="/"){
  operatorsDiv.appendChild(myOperator)}
  else if(element=="*"){
    operatorsDiv.appendChild(myOperator)}
    else if(element=="-"){
      operatorsDiv.appendChild(myOperator)}
      else if(element=="="){
        operatorsDiv.appendChild(myOperator)}
        else if(element=="C"){
          operatorsDiv.appendChild(myOperator)}

else{
  numbersDiv.appendChild(myOperator)
}

    
myOperator.classList.add("buttonType")
    myOperator.innerText=element;
    myOperator.addEventListener("click",()=>{

     
      let buttonText=myOperator.textContent;
    
    
      
    
    findButton(buttonText);
      
    myInput.value=myArray.join("")
      
    
    
        })
     
});






