const toShirnk = document.querySelectorAll("#card,.cardtext,#card img");
//new variable to select element I want observed 
//querySelectorAll creates an array of all elements with that css selector
// const options = {rootMargin: "-100px"}
//this variable is optgit lohions for the Intersection observer
const observer = new IntersectionObserver(
    entries => {//function passed into intersection observer
    entries.forEach(entry => {
        entry.target.classList.add("shrunk", entry.isIntersecting)
    })
}, 
// options//calling options which were defined earlier
)

toShirnk.forEach(elem => {
    observer.observe(elem)
});