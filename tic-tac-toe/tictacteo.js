let boxes=document.querySelectorAll(".but");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container")
let turnO=true;
let moveCount = 0;


const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[1,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        moveCount++;
        checkWinner();
    })
})

const resetgame=()=>
{
    turnO=true;
    butsenable();
    moveCount = 0;
    msgcontainer.classList.add("hide");

}

const butsdisable=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const butsenable=()=>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
    }
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    butsdisable();
    
}
const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgcontainer.classList.remove("hide");
    butsdisable();
};

const checkWinner=()=>
{
 for(let patterns of winPatterns)
 {
    let position1=boxes[patterns[0]].innerText;
    let position2=boxes[patterns[1]].innerText;
    let position3=boxes[patterns[2]].innerText;
    if(position1!=""&&position2!=""&&position3!="")
    {
        if(position1==position2&&position2==position3)
        {
            console.log(position1)
            boxes.disabled=true;
            showWinner(position1);
        }
    }

 }
 if (moveCount === 9) { 
    showDraw();
}
}
reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame)
