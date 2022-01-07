//1) Select the section with an id of container without using querySelector.
const firstID = document.getElementById("container")
console.log(firstID)

//2) Select the section with an id of container using querySelector.

const secondID = document.querySelector("#container")
console.log(secondID)

//3) Select all of the list items with a class of "second".

const allSecondList = document.querySelectorAll(".second")
console.log(allSecondList)

//4) Select a list item with a class of third, but only the list item inside of the ol tag.

const olTag = document.querySelector("ol")
const olClassThird = olTag.querySelector(".third")
console.log(olClassThird)

//5) Give the section with an id of container the text "Hello!".

// secondID.innerText = "Hello"
// console.log(secondID)

//6) Add the class main to the div with a class of footer.

// const addClassMain = document.querySelector(".footer")
// addClassMain.classList.add("main")
// console.log(addClassMain)

//7) Remove the class main on the div with a class of footer.

// const removeClassMain = document.querySelector(".main")
// removeClassMain.classList.remove("main")
// console.log(removeClassMain)

//8) Create a new li element.

const createLi = document.createElement("li")
//console.log(createLi)

//9) Give the li the text "four".

createLi.innerText = "four"
console.log(createLi)

//10) Append the li to the ul element.

const elementUl = document.querySelector("ul")
elementUl.append(createLi)
console.log(elementUl)

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const colorLi = olTag.querySelectorAll("li")
const arrLi = Array.from(colorLi)
console.log(Array.isArray(arrLi))
arrLi.forEach(element => element.style.backgroundColor = "green")

//13) Remove the div with a class of footer.
const deleteDiv = document.querySelector(".footer")
deleteDiv.remove()