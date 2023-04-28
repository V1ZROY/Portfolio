const toShrink = document.querySelector("#card");
//new variable to select element I want observed 
//querySelectorAll creates an array of all elements with that css selector
const options = {root: document.querySelector("header")}
//this variable is optgit lohions for the Intersection observer

function shrink(entry) {
    entry.classList.add("shrunk")}

const observer = new IntersectionObserver(shrink, options);

observer.observe(toShrink)

// console.log(options)
// console.log(toShrink)