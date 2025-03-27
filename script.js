document.addEventListener("DOMContentLoaded", () => {
    // Get the current page URL to determine which category to load
    const path = window.location.pathname;

    if (path.includes("people.html")) {
        loadPeople();
    } else if (path.includes("planets.html")) {
        loadPlanets();
    } else if (path.includes("starships.html")) {
        loadStarships();
    } else {
        // Main page (index.html)
        setupMainPage();
    }
});

// Function to load People from SWAPI
function loadPeople() {
    fetch("https://swapi.dev/api/people/")
        .then(response => response.json())
        .then(data => {
            const peopleList = document.getElementById("people-list");
            data.results.forEach(person => {
                const listItem = document.createElement("li");
                listItem.textContent = person.name;
                peopleList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Function to load Planets from SWAPI
function loadPlanets() {
    fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(data => {
            const planetsList = document.getElementById("planets-list");
            data.results.forEach(planet => {
                const listItem = document.createElement("li");
                listItem.textContent = planet.name;
                planetsList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Function to load Starships from SWAPI
function loadStarships() {
    fetch("https://swapi.dev/api/starships/")
        .then(response => response.json())
        .then(data => {
            const starshipsList = document.getElementById("starships-list");
            data.results.forEach(starship => {
                const listItem = document.createElement("li");
                listItem.textContent = starship.name;
                starshipsList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Function to setup the main page buttons
function setupMainPage() {
    const peopleButton = document.getElementById("people-button");
    const planetsButton = document.getElementById("planets-button");
    const starshipsButton = document.getElementById("starships-button");

    // You can add any event listeners or extra functionality for the main page here
    
}
