
let submitbuttonevent = document.querySelector(".myForm") ;
submitbuttonevent.addEventListener("submit", (e)=>{
    e.preventDefault() ;

    let userName = document.querySelector("#username") ;
    let userPass = document.querySelector("#password") ;
    let userMail = document.querySelector("#usermail") ;
    let Q1 = document.querySelector("input[name=Question1]:checked") ;
    let Q2 = document.querySelector("input[name=Question2]:checked") ;
    let Q3 = document.querySelector("input[name=Question3]:checked") ;
    let Q4 = document.querySelector("input[name=Question4]:checked") ;

    if(userMail.value === "" || userName.value === "" || userPass.value === ""){
        alert("Please fill all form details") ;
    }else{
        console.log(userMail.value,userName.value,userPass.value) ;
    }

    if(Q1.value === 0 || Q4.value === 0 ||Q3.value === 0 ||Q2.value === 0 ){
        alert("Please choose all mcqs") ;
    }else{
        console.log(Q1.value,Q4.value,Q3.value,Q2.value) ;
    }
});