

class Pokemon{
    constructor(name, hp, atk, def ){
    this.name = name
    this.hp = hp
    this.attack = atk
    this.defense = def
    this.abilities = abilities
  }

}

class Trainer {
  constructor(name) {
  this.name = name
  this.listPokemon = []

 }
 all(){
   return this.listPokemon
 }
 get(name){
   this.name =name
   this.hp = hp
   this.attack = atk
   this.defense = def
   this.abilities = [""]
 }
}
/***********************************************************
/***********************************************************
***********************************************************/
 function btnfunction(){
for(let i = 1; i < 4; i++ ){
let url = geneRandomLink()
queryPokemonAPI(url, i)
}
}
/***********************************************************
/***********************************************************
***********************************************************/

function queryPokemonAPI (url,i){
    fetch(url)
    .then((resp) =>{return resp.json()})
    .then((data) => {// this is where it's resolved
      // let pokemon = new Pokemon (data.forms)

      console.log(data);
      console.log(data.name);
      console.log(data.abilities[0].ability.name);//abilities
      console.log(data.stats[5].base_stat)//hp
      console.log(data.stats[4].base_stat)//attack
      console.log(data.stats[3].base_stat);//defense
      console.log(data.sprites.front_default)//pic

// let jim = document.getElementById('writing'){
//   jim.innerText = `abilities:${data.abilities[0].ability.name}, hp: ${data.stats[3].base_stat)}`
// }


      let head = document.createElement('h1')
      let p3 = document.createElement('p')
      let p4 = document.createElement('p')
      let p2 = document.createElement('p')
      let p = document.createElement('p')

      p.innerText = `Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`
      head.innerText = ` ${data.name}`
      p2.innerText = `attack: ${data.stats[4].base_stat}`
      p3.innerText = `defense: ${data.stats[3].base_stat}`
      p4.innerText = `hp: ${data.stats[5].base_stat}`

      let img = document.createElement('IMG')
      img.setAttribute("src", `${data.sprites.front_default}`)
      img.setAttribute("width", "200")
      img.setAttribute("height", "100")

      document.getElementById(`middle${i}`).appendChild(img)
      document.getElementById(`middle${i}`).appendChild(head)
      document.getElementById(`middle${i}`).appendChild(p4)
      document.getElementById(`middle${i}`).appendChild(p3)
      document.getElementById(`middle${i}`).appendChild(p2)
      document.getElementById(`middle${i}`).appendChild(p)

    })
  }


btnfunction() //  to have  3

function queryPokemonAj(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let text = this.responseText
      let data = JSON.parse(text)
      console.log(data.forms)

    }

  }

queryPokemonAPI(geneRandomLink(), 1)

queryPokemonAPI(geneRandomLink(), 2)

queryPokemonAPI(geneRandomLink(), 3)
  // open(HTTPMETHOD, URL, true)
  xhttp.open("GET", url, true);
  xhttp.send();
}


function geneRandom(min, max){

    let   random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random
}




function geneRandomLink(){
  return `https://fizal.me/pokeapi/api/v2/id/${geneRandom(1,150)}.json`
}



























// let poke = document.getElementById('middle');
// queryPokemonAPI = ()=>{
//   pokemon = []
//   for (let i = 1; i <= 150; i+=1) {
//    let link = (`https://fizal.me/pokeapi/api/v2/id/${i}.json`)
//    pokemon.push(fetch(link).then((resp) => resp.json()))
//
//  }
//  Promise.all(pokemon).then((results) => {
//      let pokedex = results.map((result) => ({
//          name: result.name,
//          image: result.sprites['front_default'],
//          hp: result.stats[5].stat.base_st,
//
//          type: result.types.map((type) => type.type.name).join(', '),
//          id: result.id
//      }))
//      displayPokemon(pokedex);
//  })
//
// }
//
//
// let displayPokemon = (pokedex) => {
//     console.log(pokemon);
//     let middleHTMLString = pokedex
//         .map(
//             (pokedex) => `
//         <div class="ret">
//             <img class="card-image" src="${pokedex.image}"/>
//             <h2 class="card-title">${pokedex.id}. ${pokedex.name}</h2>
//             <p class="card-subtitle">abilities: ${pokedex.type}</p>
//             <p class="card-subtitle">hp: ${pokedex.hp}</p>
//
//         </div>
//     `
//         )
//         .join('')
//     poke.innerHTML = middleHTMLString;
// };
//
//
// queryPokemonAPI()


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
//
