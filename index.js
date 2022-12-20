// const arr = ["Груша", "Яблоко", "Повидло", "Завали", "Ебало", "Быдло"];
// const ull = document.querySelector(".ull")
// const btnn = document.querySelector(".btnn")
// let i = 0;
// btnn.addEventListener("click", () => {
//         if (i >= arr.length) {
        
//         } else {
//                 ull.innerHTML += `<li>${arr[i]}</li>`
//                 i++
//         }
// })

// const box = document.querySelector(".box")
// // const blueBtn = document.querySelector(".changeToBlue")
// const redBtn = document.querySelector(".changeToRed")

// // blueBtn.addEventListener("click", () => {
// //     box.className = "blue";
// // })
// redBtn.addEventListener("click", () => {
//     if(box.className === "box") {
//         box.className = "blue"
//     } else if(box.className === "blue") {
//         box.className = "purple"
//     } else {
//         box.className = "box"
//     }
// })


const list = ["Begimay", "Ruslan", "Karina", "David", "Meder", "Jyldyz", "Abdilamit", "Nursultan", "Astana"]

const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const ul = document.querySelector("ul")
const A = document.querySelector(".A")
const B = document.querySelector(".B")
const C = document.querySelector(".C")
const D = document.querySelector(".D")
const E = document.querySelector(".E")
const F = document.querySelector(".F")
const G = document.querySelector(".G")
const H = document.querySelector(".H")
const I = document.querySelector(".I")
const J = document.querySelector(".J")
const K = document.querySelector(".K")
const L = document.querySelector(".L")
const M = document.querySelector(".M")
const N = document.querySelector(".N")
const O = document.querySelector(".O")
const P = document.querySelector(".P")
const Q = document.querySelector(".Q")
const R = document.querySelector(".R")
const S = document.querySelector(".S")
const T = document.querySelector(".T")
const U = document.querySelector(".U")
const V = document.querySelector(".V")
const W = document.querySelector(".W")
const X = document.querySelector(".X")
const Y = document.querySelector(".Y")
const Z = document.querySelector(".Z")


list.map(item => {
    ul.innerHTML += `<li>${item}</li>`
})

btn.addEventListener("click", () => {
    ul.innerHTML = ""

    list.push(input.value)

    list.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })

    input.value = ""
})

A.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "A")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
B.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "B")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
C.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "C")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
D.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "D")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
E.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "E")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
F.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "F")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
G.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "G")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
H.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "H")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
I.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "I")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
J.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "J")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
K.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "K")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
L.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "L")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
M.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "M")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
N.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "N")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
O.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "O")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
P.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "P")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
Q.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "Q")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
R.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "R")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
S.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "S")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
T.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "T")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
U.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "U")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
V.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "V")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
W.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "W")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
X.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "X")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
Y.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "Y")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})
Z.addEventListener ("click", () => {
    ul.innerHTML = ""

    const fil = list.filter(item => item[0] === "Z")

    fil.map(item => {
        ul.innerHTML += `<li>${item}</li>`
    })
})


