function send(){
   let email =document.getElementById("emailinputes").value;
   let password =document.getElementById("passwordinputs").value;
if(email=="wantedatom7@gmail.com"&& password=="hesoyam"){
window.location.replace("./supra.html");
}else if(email == "" || password == ""){
    document.getElementById("error").innerHTML="Enter the details";
    document.getElementById("error").style.color="red";
}
else{
    document.getElementById("error").style.color="red";
    document.getElementById("error").innerHTML="Wrong password or Email. Try again";
    document.getElementById("emailinputes").style.backgroundColor = "#FFCCCB";
    document.getElementById("passwordinputs").style.backgroundColor="#FFCCCB";
    document.getElementById("emailinputes").style.borderColor = "red";
    document.getElementById("passwordinputs").style.borderColor="red";
}
}
let a =document.getElementById("passwordinputs");
let b =document.getElementById("emailinputes");
a.addEventListener("click", () =>{
    document.getElementById("error").style.color="transparent";
    document.getElementById("emailinputes").style.backgroundColor = "white";
    document.getElementById("passwordinputs").style.backgroundColor="white";
    document.getElementById("emailinputes").style.borderColor = "white";
    document.getElementById("passwordinputs").style.borderColor="white";
} )
b.addEventListener("click", () =>{
    document.getElementById("error").style.color="transparent";
    document.getElementById("emailinputes").style.backgroundColor = "white";
    document.getElementById("passwordinputs").style.backgroundColor="white";
    document.getElementById("emailinputes").style.borderColor = "white";
    document.getElementById("passwordinputs").style.borderColor="white";
}
)