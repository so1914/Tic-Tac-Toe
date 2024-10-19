let boxes=document.querySelectorAll(".box"); //saare box as a array boxes m save hue hai !
let reset=document.querySelector(".reset");
let msgContainer= document.querySelector("#msg-container");
let msg=document.querySelector(".winner");

let turnO=true; //PLAYER O HAI
msgContainer.style.visibility='hidden';

const winPatterns=[ //2D ARRAY
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
    [3,4,5],
    [6,7,8]
];

boxes.forEach( (e) => {
    e.addEventListener(("click"),()=>{
      
        console.log("box was clicked");
        if(turnO){
            e.innerText="O"; 
            // AGAR player o hai toh O print ho jaye aur uske baad false ho jaye taki player X ko chance mile
            turnO=false;
        }
        else{
            e.innerText="X"; 
            // agar player x hai tog X print ho jaye aur uske baad true ho jaye
            turnO=true;
        } 
        console.log(turnO);
        e.disabled=true;
        //***dubara change nhi hona chahiye isliye box.disabled=true by default false rhta hai !!

        checkWinner(); 
    })
});

const checkWinner = () =>{
    for ( i of winPatterns){
        // console.log(i); i[0] 2d array k  element ko show kra hai
        // console.log(i[0],i[1],i[2]);
        // console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);
        // console.log(boxes[i[0]].innerHTML,boxes[i[1]].innerHTML,boxes[i[2]].innerHTML);

        let pos1Val=boxes[i[0]].innerText;
        let pos2Val=boxes[i[1]].innerText;
        let pos3Val=boxes[i[2]].innerText;

        if(pos1Val && pos2Val && pos3Val !=0){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("hurry !! you are winner " ,pos1Val);
                showWinner(pos1Val);
            }
        }
         
    }
}


const showWinner = (winner) => {
    msg.innerText=`Congratulation! Winner is ${winner}`; 
   msgContainer.style.visibility='visible';
   disabledBox();
}   

const disabledBox = () =>{
    for(let  box of boxes){
        box.disabled=true;
    }
} 

const resetGame = () => { 
    turnO=true; 
    boxes.forEach(box => {
    box.innerText = ""; 
    box.disabled=false; 
    }); 
    msgContainer.style.visibility='hidden';
}

reset.addEventListener(("click"), resetGame);