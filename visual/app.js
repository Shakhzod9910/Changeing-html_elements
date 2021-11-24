var men = 22
var women = 33
const human = men + women
console.log(human-women+men)

let xZ = 10
let y = 20
console.log(xZ)

const b_a = 12
console.log(b_a)

let life = ["love", "job", "experiance"]

console.log(life)
console.log(life[0])
console.log(life[1],life[2])

const love = {f:"family" , s:"spouse" , m:"mother"}
console.log(love)
console.log(love.f,love.s)
console.log(love["s"],love["m"])

let hed = document.querySelector("h1")

hed.textContent = "HAHAHAHA"
let weight = 60
if (weight < 60){
    hed.textContent = "hihihiii"
}

else if (weight > 59 && weight < 80) {
    hed.textContent = "HAHAHAHA"
} else {
    hed.textContent = "vaxavaxavaaaa"
}