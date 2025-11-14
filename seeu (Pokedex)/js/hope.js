var pokeCounter = 20

async function getThat() {
    var output = "";
    const pokemonNumber = 1

    for(var i = 0; i < pokeCounter; i++){
        var pokeUrl='https://pokeapi.co/api/v2/pokemon-form/' + (pokemonNumber + i) +'/';

        await axios.get(pokeUrl)
        .then((res) => {
            const pokemon = res.data;

            output += `
                <a class="summary" href="./summary.html?code=${pokemon.id}">
                <div class="chart">
                    <p class="name">#${pokemon.id}</p>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="image">
                    <h4 class="name">${pokemon.name}</h4>
                </div>
                </a>
                    `;

            document.getElementById("my-table").innerHTML = output;

            })
            .catch((err) => {
                console.log(err)

                console.log(pokemons);
            })
    } 
} 
function seeMore(){
    pokeCounter += 20
getThat()
}
