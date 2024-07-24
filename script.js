/*Changer couleur avec boutons*/
let bouton = document.querySelector(".bouton")
let fenetre = document.getElementById("fenetre")


/*function couleur(){
    let couleur=bouton.id
    fenetre.style.background=couleur
}

bouton.addEventListener("click", couleur)*/

let rouge = document.getElementById("rouge")
let orange = document.getElementById("orange")
let jaune = document.getElementById("jaune")
let vert = document.getElementById("vert")
let turquoise = document.getElementById("turquoise")
let bleu = document.getElementById("bleu")
let indigo = document.getElementById("indigo")
let violet = document.getElementById("violet")
let rose = document.getElementById("rose")
let noir = document.getElementById("noir")

rouge.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "red"
})

orange.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "orange"
})

jaune.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "yellow"
})

vert.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "green"
})

turquoise.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "turquoise"
})

bleu.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "deepskyblue"
})

indigo.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "blue"
})

violet.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "blueviolet"
})

rose.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "deeppink"
})

noir.addEventListener("click", function () {
    document.getElementById("fenetre").style.background = "black"
})

/*Changer couleur avec RGB*/

function couleur_rgb() {
    let red = document.getElementById("red").value
    let green = document.getElementById("green").value
    let blue = document.getElementById("blue").value
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    fenetre.style.background = color;
    document.getElementById("result").value = color;
}
document.getElementById("red").addEventListener("input", couleur_rgb);

document.getElementById("green").addEventListener("input", couleur_rgb);

document.getElementById("blue").addEventListener("input", couleur_rgb); 