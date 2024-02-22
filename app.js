let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winprediction = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () =>{
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clikced");
        if (turnO) {
            box.innerText = "O";
            box.style.backgroundColor = "#797596";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.backgroundColor = "#755171";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwineer = (winner) => {
    msg.innerText = `Congratulation You Have Won ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}


const checkWinner = () => {
    for (let pattern of winprediction) {
        //     console.log(pattern[0],pattern[1],pattern[2]);
        //     console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // };
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
                console.log("winner", pos1);
                showwineer(pos1);
            }
        }
    }

};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)