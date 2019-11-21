// class Trainer {
//   constructor(name){
//     this.name = name,
//     this.pokemon = []
//   }
// }
//
//
// class Pokemon {
//   constructor(name){
//   this.hp = ,
//   this.atk = ,
//   this.def = ,
//   this.moves = []
//   this.push(pokemon)
// }
// }
//
// let pokemon = new Pokemon('');

// class Pokemon{
//   constructor(name){
//     this.name =name
//     this.hp = hp
//     this.defense = def
//     this.abilities = [""]
//   }
//   get(name){
//
//   }
// }

// class Trainer {
//   constructor(name) {
//     pokemon = []
//   }
let poke = document.getElementById('middle');
queryPokemonAPI = ()=>{
  pokemon = []
  for (let i = 1; i <= 150; i+=1) {
   let link = (`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
   pokemon.push(fetch(link).then((resp) => resp.json()))

 }
 Promise.all(pokemon).then((results) => {
     let pokedex = results.map((result) => ({
         name: result.name,
         image: result.sprites['front_default'],
         hp: result.stats[5].stat.base_stat,

         type: result.types.map((type) => type.type.name).join(', '),
         id: result.id
     }))
     displayPokemon(pokedex);
 })

}


let displayPokemon = (pokedex) => {
    console.log(pokemon);
    let middleHTMLString = pokedex
        .map(
            (pokedex) => `
        <div class="ret">
            <img class="card-image" src="${pokedex.image}"/>
            <h2 class="card-title">${pokedex.id}. ${pokedex.name}</h2>
            <p class="card-subtitle">abilities: ${pokedex.type}</p>
            <p class="card-subtitle">hp: ${pokedex.hp}</p>

        </div>
    `
        )
        .join('')
    poke.innerHTML = middleHTMLString;
};

queryPokemonAPI()


// let list  = document.getElementById('middle')
//
// query = ()=>{
//    fetch(`https://fizal.me/pokeapi/api/v2/id/25.json`)
//    .then((resp) =>{return resp.json()})
//    .then((data) => {
//      console.log(data);
//
//     for(let i in data){
//       console.log(i)
//       let li = document.createElement('li')
//       li.innerText = `${i} ${data[i]['model_year']} ${data[i]}`
//       list.appendChild(li)
//     }
//
//    })
//  }
