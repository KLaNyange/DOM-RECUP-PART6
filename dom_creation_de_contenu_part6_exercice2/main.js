//*Exo1
let delfirst = document.querySelector("input")
let ul = document.querySelector("ul")

delfirst.addEventListener("click", function(){
    ul.removeChild(ul.firstElementChild)
})

//*Exo2
let dellast = delfirst.nextElementSibling
dellast.addEventListener("click", function(){
    ul.removeChild(ul.lastElementChild)
})

//*Exo3
let delrand = dellast.nextElementSibling
delrand.addEventListener("click", function(){
    if (ul.children.length > 0) {
        ul.removeChild(ul.children[Math.floor(Math.random()*ul.children.length)])
    }else {
        console.warn("IL N'Y A PLUS RIEN A SUPPRIMER");
    }
})

//*Exo4
let ul2 = document.querySelectorAll("ul")[1]
let li = ul2.children
let newli = document.createElement("li")
newli.innerText = "보라해"
ul2.append(newli)
let btn = document.querySelectorAll("input")[3]
btn.addEventListener("click", function(){
    ul2.replaceChild(newli, li[1])
})

//*Exo5
let txt = document.querySelector("#replaceValue")
let btn2 = document.querySelectorAll("input")[5]

function replace() {
    let newbi = document.createElement("li")
    newbi.innerText = txt.value
    ul2.append(newbi)
    ul2.replaceChild(ul2.lastElementChild, li[2])
}
// function replace() {
//     ul2.children[2].innerText = txt.value
// }

btn2.addEventListener("click", replace)


