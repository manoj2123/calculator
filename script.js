let result=document.getElementById("inputext");


let calculate=(number)=>{
    result.value+=number;
}



let Result=()=>{
try{
    result.value=eval(result.value);
}
catch(error){
alert("Enter the input")
}
}

function clr(){
    result.value="";
}