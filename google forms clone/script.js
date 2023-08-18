
let submitbuttonevent = document.querySelector(".myForm") ;
submitbuttonevent.addEventListener("submit", (e)=>{
    e.preventDefault() ;

    let userName = document.querySelector("#username") ;
    let userPass = document.querySelector("#password") ;
    let userMail = document.querySelector("#email") ;
    if(userMail.value === "" || userName.value === "" || userPass.value === ""){
        alert("error") ;
    }else{
        console.log(userMail.value,userName.value,userPass.value) ;
    }
});