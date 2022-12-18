const arr = ["Груша", "Яблоко", "Повидло", "Завали", "Ебало", "Быдло"];
const ul = document.querySelector("ul")
const btn = document.querySelector(".btn")
let i = 0;
btn.addEventListener("click", () => {
        if (i >= arr.length) {
        
        } else {
                ul.innerHTML += `<li>${arr[i]}</li>`
                i++
        }
})

const box = document.querySelector(".box")
// const blueBtn = document.querySelector(".changeToBlue")
const redBtn = document.querySelector(".changeToRed")

// blueBtn.addEventListener("click", () => {
//     box.className = "blue";
// })
redBtn.addEventListener("click", () => {
    if(box.className === "box") {
        box.className = "blue"
    } else if(box.className === "blue") {
        box.className = "purple"
    } else {
        box.className = "box"
    }
})
