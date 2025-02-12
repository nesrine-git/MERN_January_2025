const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const filtedId = pokemon.filter(p => p.id % 3 === 0)

// an array of pokémon objects that are "fire" type
const filtedTypeFire  = pokemon.filter(p => p.types.find(ele => ele ==="fire"))

// an array of pokémon objects that have more than one type
const moreType = pokemon.filter(p => p.types.length > 1)

// an array with just the names of the pokémon
const pokName = pokemon.map(p => p.name)

// an array with just the names of pokémon with an id greater than 99
const nameId99Plus = (pokemon.filter(p => p.id > 99)).map(ele => ele.name)

// an array with just the names of the pokémon whose only type is poison
const nameTypePoison = (pokemon.filter(p => p.types.length === 1 && p.types[0]==="poison")).map(p => p.name)

// an array containing just the first type of all the pokémon whose second type is "flying"
const secondTypeFlying = (pokemon.filter(p => p.types[1]=== "flying")).map(p => p.types[0])

// a count of the number of pokémon that are "normal" type
/*let countTypeNormal = 0;
pokemon.forEach((p) => {
     p.types.includes("normal") ? countTypeNormal ++ : null;
});*/
let countTypeNormal = pokemon.map(p => p.types).filter(types => {   
                                    let isNormal = false; 
                                    types.forEach(type => {
                                    if (type === "normal") {
                                        isNormal = true;
                                    }
                                });
                                return isNormal; 
                                }).length;                             

// an array with all pokemon except the pokemon with the id of 148
const pokWithOut148 = pokemon.filter(p => p.id !== 148)

// an array with all pokemon and for pokemon id: 35 replacing "normal" with "fairy"
const replaceType = pokemon.map(p => {
    if (p.id === 35) {
    p.types = p.types.map(type => type === "normal" ? "fairy" : type) };
    return p;
   });
