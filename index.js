// Get data from API
function fetchJokes() {
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10")
    .then(response => response.json())
    .then(data => deliverJoke(data))
}
document.addEventListener("DOMContentLoaded", () => fetchJokes())

// When clicking on the "free joke" button, the tag with id "joke-section" will be populated and the "gimme the punchline" button will appear

const freeJoke = document.querySelector("#jokeButton")

function deliverJoke (data) {
    const jokes = data.jokes
    jokes.forEach(joke => {
        const jokeSetUp = joke.setup
        document.querySelector("#setup").textContent = jokeSetUp
        const jokePunchline = joke.delivery
        document.querySelector("#punchline").textContent = jokePunchline
        document
        freeJoke.addEventListener("click", (e) => {
            e.preventDefault()
            const jokeSection = document.querySelector("#joke-section")
            jokeSection.removeAttribute("style")
        })
        const gimmeThePunchline = document.querySelector("#punch-me")
        gimmeThePunchline.addEventListener("click", (e) => {
            e.preventDefault()
            const punchlineSection = document.querySelector("#punchline-section")
            punchlineSection.removeAttribute("style")
})
    })
}

// When "good" is input into the text field and submitted, a thumbs up gif will appear. If anything else is typed in, an "oh well" gif will appear.

//When the mouse hovers over the image, the page will reset.