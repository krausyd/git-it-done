const getUserRepos = function(user) {
    const apiUrl = "https://api.github.com/users/" + user + "/repos";
    fetch(apiUrl)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data);
            })
        });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
};
userFormEl.addEventListener("submit", formSubmitHandler);