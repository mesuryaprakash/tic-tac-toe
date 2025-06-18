const item = document.querySelectorAll(".item-box")
console.log(item)
const sign = document.querySelector(".sign")
const winnerPopUp = document.querySelector(".winner")
// console.log(winnerPopUp)

const winning = [
    // [1,2,3],
    // [4,5,6],
    // [7,8,9],
    // [1.4,7],
    // [2,5,8],
    // [3,6,9],
    // [1,5,9],
    // [3,5,7]
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let x = 'O'
let flag = false
let isdraw = false

for(let i of item){
    i.addEventListener("mouseover", ()=>{
        if(flag) return;
        i.style.border = `4px solid ${i.disabled ? 'gray' : x == 'O' ? "#4040F2" : "#F24040"}`
    
    })

    i.addEventListener("mouseout", ()=>{
        if(flag) return;
        i.style.border = "none"
    })

    i.addEventListener("click", ()=>{
        if(flag) return;
        if(x == 'O' ){
            i.innerHTML = 'O'
            x = 'X'
        } else {
            i.innerHTML = 'X'
            x = 'O'
        }

        i.disabled = true;
        isWinner();

        // if(flag){
        //     for(let j of item){
        //         j.disabled = true;
        //     }
        //     return
        // }
    });
}

function handleClose(){
    winnerPopUp.style.display = "none"
}

// console.log(winning[3][0])
function isWinner(){
    for(let i = 0; i < 8; i++){
        // console.log("In loop")
        let a = item[winning[i][0]].innerHTML
        let b = item[winning[i][1]].innerHTML
        let c= item[winning[i][2]].innerHTML        
        if(a != "" && b!="" && c!=""){
            if(item[winning[i][0]].innerHTML == item[winning[i][1]].innerHTML && item[winning[i][0]].innerHTML == item[winning[i][2]].innerHTML){
                item[winning[i][0]].style.border = "4px solid #40F281"
                item[winning[i][1]].style.border = "4px solid #40F281"
                item[winning[i][2]].style.border = "4px solid #40F281"
                winnerPopUp.style.display = "block"
                sign.innerHTML = a
                flag = true;
            }
        }
    }
}

function newGame(){
    handleClose()
    flag = false;
    for(let i of item){
        i.innerHTML = ""
        i.disabled = false
        i.style.border = "none"
        x = "O"
    }
}






