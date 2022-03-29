
fetch("https://api.quotable.io/random")
.then(res => res.json())
.then(data => { addQuote(data)
})

function addQuote(quote){
    const quoteTag = document.getElementById("quote")
    const h2 = makeH2(quote.content)
    const p = makeP(quote.author)
    quoteTag.appendChild(h2)
    quoteTag.appendChild(p)
}

function makeH2(content){
    const h2 = document.createElement('h2');
    h2.innerHTML = content
    return h2
}

function makeP(author){
    const p = document.createElement('p')
    p.innerHTML = author
    return p
}
