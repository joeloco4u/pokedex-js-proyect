var form = true
var side = true

async function seePokemon() {
    const URL = window.location.search;
    const params = new URLSearchParams(URL);
    const code = params.get('code');

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${code}`)

        const pokemon = response.data;

        document.getElementById('name').innerHTML = pokemon.name;
        document.getElementById('number').innerHTML = pokemon.id;
        
        document.getElementById('height').innerHTML = pokemon.height/10;
        document.getElementById('weight').innerHTML = pokemon.weight/10;

        if (form && side) {
            document.getElementById('sprite').src= pokemon.sprites.front_default;
        } else if (form && !side) {
            document.getElementById('sprite').src= pokemon.sprites.back_default;
        } else if (!form && side) {
            document.getElementById('sprite').src= pokemon.sprites.front_shiny;
        } else {
            document.getElementById('sprite').src= pokemon.sprites.back_shiny;
        }

        var moves = "";
        for(var i = 0; i < pokemon.moves.length; i++){
            moves += `<li> ${pokemon.moves[i].move.name} </li>`;
        }
        document.getElementById('moves').innerHTML = moves;



    } catch (err) {
        console.log(err)
    }
}
function shiny() {
    if (form) {
        form = false;
        seePokemon();
    } else {
        form = true;
        seePokemon();
    }
}
function turn(){
    if (side) {
        side = false;
        seePokemon();
    } else {
        side = true;
        seePokemon();
    }
}