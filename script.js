
function fetchCharacters() {
    fetch(`https://rickandmortyapi.com/api/character/`)
        .then(response => response.json())
        .then(data => {
            let characters = data.results.slice(0,20);
            console.log(characters);
            displayCharacters(characters);
        })
        .catch(error => {
            console.log("Facing API handle issues:", error);
        });
}

function displayCharacters(characters){
    const charcatersDiv = document.querySelector("#character-container");
    characters.forEach((character)=>{
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2><br/>
        <p><strong>Species:</strong> ${character.species}</p><br/>
        <p><strong>Gender:</strong> ${character.gender}</p><br/>
        <p><strong>Status:</strong> ${character.status}</p>
        `;

        charcatersDiv.appendChild(card);
});
}
fetchCharacters();