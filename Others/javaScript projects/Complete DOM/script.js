console.log("hello from Console")


// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading)

// const listItems = document.querySelectorAll(".list-items")

// console.log(listItems);


// for(i = 0; i<listItems.length; i++)
// {
//     listItems[i].style.color = "blue";
//     console.log("I from Loop");
// }

// const listItems = document.querySelector(".list-items")
// console.log(listItems.innerHTML);
// console.log(listItems.textContent);
// console.log(listItems.innerText);

// adding new li in ul
const ul = document.querySelector("ul")

const li = document.createElement("li")


// modifying the text 

li.innerText = "Thor";

// modifying attributes & classes

li.setAttribute('class','list-items')

// adding li into ul

ul.append(li)

