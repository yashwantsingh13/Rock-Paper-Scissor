let userscore=0;
let computerscore=0;
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#msg");
 const userscorep=document.querySelector("#user-score");
 const usercompep=document.querySelector("#comp-score");

 const gencompchoice=()=>{
    const option=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);//yaha random index selext kar rahe h computer ke liye floor ka use decimal hatane ke luye use kr rahe h
    return option[random];
 }

 const draw=()=>{
    console.log("game was draw");
    msg.innerText="Draw!";
 }
 const showwinner=(userwin,choiceid,compchoice)=>{
    if(userwin){
        userscore++;
        userscorep.innerText=userscore;
        console.log("You win")
        msg.innerText=`You win! your ${choiceid} beats ${compchoice}`;
        

    }else{
        computerscore++;
        usercompep.innerText=computerscore;
        console.log("You lose")
        msg.innerText=`You Lose!your ${compchoice} beats ${choiceid}`;
    }
 }

 const playgame=(choiceid)=>{
    console.log("user choice",choiceid)
    // generate computer choice
const compchoice=gencompchoice();
console.log("computer choice",compchoice);

if(choiceid===compchoice){
      draw();
     
}else{
    let userwin=true;
    if(choiceid==="rock"){
        userwin=compchoice==="papper"?false:true;
    }else if(choiceid==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,choiceid,compchoice)
}



 };



 choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const choiceid=choice.getAttribute("id");
        playgame(choiceid);
    })
    
 });