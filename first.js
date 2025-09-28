let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".resetBtn")
let newGamebtn = document.querySelector("#newGamebtn")
let newGamebtn2 = document.querySelector("#newGamebtn2")
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".msg-container")
let main = document.querySelector(".main")
let drawMsg = document.querySelector(".draw-msg")
let checkDraw = document.querySelector(".checkDraw")
let count = 0;
let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        if(turnO){
            box.innerText = "O"
            box.style.color = "rgb(29, 72, 141)"
            turnO = false;
        }
        else{
            box.innerText = "X"
            box.style.color = "rgb(4, 105, 95)"
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkwinner();

        if(count === 9 && !isWinner){
        checkNoWinner();
        }
    })
})  
const checkNoWinner = () => {
        console.log("Opps! The game was draw",count)
        // checkDraw.classList.remove("hide")
        msg.innerText = `Opps! The Game was Draw`;
        msg.style.color = "red"
        msgContainer.classList.remove("hide");
        disabledBoxes();
        hideContent();
    }

const disabledBoxes = () => {
   for(let box of boxes){
    box.disabled = true
   }
}
const enableBoxes = () => {
   for(let box of boxes){
    box.disabled = false;
    box.innerText = ""
   }
}
const hideContent = () => {
    main.classList.add("hide");
}
const UnhideContent = () => {
    main.classList.remove("hide");

}
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winnner is ${winner}`;
    msg.style.color = "rgb(170, 255, 1)"
    msgContainer.classList.remove("hide");
    disabledBoxes();
    hideContent();
    // drawMsg.classList.remove("hide")
}
const checkwinner = () => {  
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText
        let position2 =  boxes[pattern[1]].innerText
        let position3 =  boxes[pattern[2]].innerText

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                // console.log("Winner!", position1)
                showWinner(position1);
                return true
            }
        }
    }
            
}   

const resetGame = () => {
    turnO = true
    count = 0;
    msgContainer.classList.add("hide")
    enableBoxes();
    UnhideContent();
}

newGamebtn.addEventListener("click", resetGame)
// newGamebtn2.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)