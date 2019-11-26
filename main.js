let trainerForm = document.getElementById('new-unit-form')

class Pokemon{
    constructor(data,abilities){
    this.name =  data.name
    this.hp = data.stats[5].base_stat
    this.attack = data.stats[4].base_stat
    this.defense = data.stats[3].base_stat
    this.abilities = abilities
  }

}

class Trainer {
  constructor(name) {
  this.name = name
  this.listPokemon = []
  // this.all = this.all.bind(this)

 }
 all(){
   return this.listPokemon
 }
 get(name) {
   return name
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
 // pokemon = new Pokemon(name, hp, attack, defense)
trainer = new Trainer("Haroun")
function queryPokemonAPI (url,i){
    fetch(url)
    .then((resp) =>{return resp.json()})
    .then((data) => {// this is where it's resolved

      abilitiesHolder = []
      for(let i = 0;  i< data.abilities.lenght; i++){
        abilitiesHolder.push(data.abilities[i].ability.name)
      }
      // trainerForm =()=> {
      //   let first=document.getElementById("firstname").value;
      //   // let name = document.getElementById('trainer-input').value
      //   let trainer = new Trainer(name)
      //   let outputMessage = "Welcome, " + first;
      // document.getElementById("Name").innerHTML = outputMessage;
      //   trainer.listPokemon.push(pokemon)
      //   trainerForm.style.display = 'none'
      //   trainerIcon.style.display = 'block'
      // }
let pokemon = new Pokemon (data, abilitiesHolder)
  trainer.listPokemon.push(pokemon)

      // pokemon.push(name, hp, attack, defense)
      console.log(data);
      console.log(data.name);
      console.log(data.abilities[0].ability.name);//abilities
      console.log(data.stats[5].base_stat)//hp
      console.log(data.stats[4].base_stat)//attack
      console.log(data.stats[3].base_stat);//defense
      console.log(data.sprites.front_default)//pic

      name = ` ${data.name}`
      hp = ` ${data.stats[5].base_stat}`
      attack = `attack: ${data.stats[4].base_stat}`
      defense = ` ${data.stats[3].base_stat}`
      abilities = ` ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`


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
// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//
// }

//
// function myName() {
//   var x = document.getElementById("unit-name").value;
//   document.getElementById("name").innerHTML = x;
// }



//
// //class Trainer {
//     constructor(name) {
//       this.name = name
//       this.pokemon = []
//     }
//     addPokemon(pokemon) {
//       this.pokemon.push(pokemon)
//       return `You added ${pokemon.name} to your team!`
//     }
