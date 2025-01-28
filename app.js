let boxes = document.querySelectorAll('.box');
console.log(boxes);

let winnerNode = document.querySelector('.winner');
let newGameNode = document.querySelector('#new-btn');
let containerNode = document.querySelector('.msg-container');

//take node foe reset and new game button
let reset = document.querySelector('#reset-btn');


let player_O = true;  //first it will start with O

// store winner combination into 2D array
const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//logic for resetting game..
const resetGame =()=>{
    console.log('reset button clicked');
    player_O = true;
    containerNode.classList.remove('show');
    containerNode.classList.add('hide');
    boxes.forEach(box => box.disabled = false);
    boxes.forEach(box => box.innerText="");
    
};

//displaying winner
const showWinner = (winner) =>{
    // winnerNode.innerText = `Congratulations, Winner is ${winner}`;
    winnerNode.innerText = `🎉 ${winner} Wins! 🎉`;
    containerNode.classList.remove('hide');
    containerNode.classList.add('show'); // Remove the 'hide' class to show the effect

   
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
   
    
};


// creating function for checking winner
const checkWinner = () => {
    for (let pattern of winner){
        let pos0Val = boxes[pattern[0]].innerHTML;
        let pos1Val = boxes[pattern[1]].innerHTML;
        let pos2Val = boxes[pattern[2]].innerHTML;
        
        if (pos0Val != "" && pos1Val != "" && pos2Val != ""){
            if (pos0Val === pos1Val && pos1Val ===pos2Val){
                console.log("winner");
                boxes.forEach(box => box.disabled = true);
                showWinner(pos0Val);
            }
        }
    }

};

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (player_O){
            box.innerHTML = 'X';
            player_O = false;
        }else{
            box.innerHTML = 'O';
            player_O = true;
        }
        box.disabled = true;

        checkWinner();

    });
});


reset.addEventListener('click', resetGame);
newGameNode.addEventListener('click', resetGame);



