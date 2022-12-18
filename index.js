const arr = ["Груша", "Яблоко", "Повидло", "Завали", "Ебало", "Быдло"];
const ul = document.querySelector("ul")
const btn = document.querySelector("button")
let i = -1;
btn,addEventListener("click", () => {
        i++
        ul.innerHTML += `<li>${arr[i]}</li>`
})
