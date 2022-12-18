const arr = ["Груша", "Яблоко", "Повидло", "Завали", "Ебало", "Быдло"];
const ul = document.querySelector("ul")
const btn = document.querySelector("button")
let i = 0;
btn,addEventListener("click", () => {
        if (i >= arr.length) {
        
        } else {
                ul.innerHTML += `<li>${arr[i]}</li>`
                i++
        }
})