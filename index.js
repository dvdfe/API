const quote = document.getElementById("quote")

fetch("https://api.quotable.io/random")
.then(res => res.json())
.then(data => {
    quote.innerHTML = data.content
})









