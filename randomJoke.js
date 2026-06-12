const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

btn.addEventListener("click", async () => {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        joke.textContent = `${data.setup} ${data.punchline}`;
    }
    catch(error) {
        joke.textContent = "Failed to load Joke";
        console.log(error);
    }
});