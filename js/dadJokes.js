const displayDadJoke = (response) => {
    let dadJoke = processResponse(response);
    console.log("API response: ", dadJoke);
    $("#dadJokeText").text(dadJoke);
  };

function displaySpecificDadJoke() {
    let searchWord = $("#searchWord").val();
    let endpoint = "https://icanhazdadjoke.com/search?term=" + searchWord;
    $.getJSON(endpoint, displayDadJoke);  
}

function displayRandomDadJoke() {
    let endpoint = "https://icanhazdadjoke.com";
    $.getJSON(endpoint, displayDadJoke);  
}

function processResponse(response) {
    if (response.joke == null) {
        if (response.total_jokes == 0) {
            return "No dad joke with the entered search parameter could be found";
        }
        if (response.total_jokes > 20) {
            response.total_jokes = 20;
        }
        let randJokeNum = Math.floor(Math.random() * response.total_jokes);
        return response.results[randJokeNum].joke;
    }
    return response.joke;
}