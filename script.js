// script.js
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;

    if (path.includes("people.html")) {
        loadPeople();
    } else if (path.includes("planets.html")) {
        loadPlanets();
    } else if (path.includes("starships.html")) {
        loadStarships();
    } else {
        setupMainPage();
    }

    setupModal();
});

function loadPeople() {
    fetchData("https://swapi.dev/api/people/", "people-list", displayPersonDetails);
}

function loadPlanets() {
    fetchData("https://swapi.dev/api/planets/", "planets-list", displayPlanetDetails);
}

function loadStarships() {
    fetchData("https://swapi.dev/api/starships/", "starships-list", displayStarshipDetails);
}

function fetchData(url, listId, displayDetails) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = "Loading...";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            listElement.innerHTML = "";
            data.results.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item.name;
                listItem.addEventListener("click", () => displayDetails(item));
                listElement.appendChild(listItem);
            });
        })
        .catch(error => {
            listElement.innerHTML = "Error fetching data.";
            console.error("Error fetching data:", error);
        });
}

function displayPersonDetails(person) {
    const content = `
        <h2>${person.name}</h2>
        <p>Height: ${person.height}</p>
        <p>Mass: ${person.mass}</p>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Skin Color: ${person.skin_color}</p>
    `;
    showModal(content);
}

function displayPlanetDetails(planet) {
    const content = `
        <h2>${planet.name}</h2>
        <p>Climate: ${planet.climate}</p>
        <p>Gravity: ${planet.gravity}</p>
        <p>Population: ${planet.population}</p>
    `;
    showModal(content);
}

function displayStarshipDetails(starship) {
    const content = `
        <h2>${starship.name}</h2>
        <p>Model: ${starship.model}</p>
        <p>Manufacturer: ${starship.manufacturer}</p>
        <p>Cost: ${starship.cost_in_credits}</p>
    `;
    showModal(content);
}

function setupMainPage() {
    const peopleButton = document.getElementById("people-button");
    const planetsButton = document.getElementById("planets-button");
    const starshipsButton = document.getElementById("starships-button");

    peopleButton.addEventListener("click", () => {
        window.location.href = "people.html";
    });

    planetsButton.addEventListener("click", () => {
        window.location.href = "planets.html";
    });

    starshipsButton.addEventListener("click", () => {
        window.location.href = "starships.html";
    });
}

function setupModal() {
    const modal = document.getElementById("details-modal");
    const closeButton = document.querySelector(".close-button");

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function showModal(content) {
    const modalContent = document.getElementById("details-content");
    modalContent.innerHTML = content;
    const modal = document.getElementById("details-modal");
    modal.style.display = "block";
}