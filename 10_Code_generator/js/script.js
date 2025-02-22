const quote = document.getElementById("quote")
const author = document.getElementById("author")
const getbtn = document.getElementById("getbtn")
const api_url = "https://dummyjson.com/quotes/random"

getbtn.addEventListener("click", () => {
    async function getquote(url) {
        const response = await fetch(url);
        var data = await response.json();
        quote.textContent = data.quote;
        author.textContent = data.author;
    }
    getquote(api_url)
});