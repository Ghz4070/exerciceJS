/* Consignes
Vous devez générer un array (tableau) d'objet de personnages conçu sur les critères
que vous voulez */

const criteres = {
  eyesColor: ["bleu", "marron", "vert", "noir"],
  hairColor: ["rouge", "brun", "blond", "vert", "roux"],
  body: ["gros", "maigre", "mince", "obèse"],
  skinColor: ["rouge", "jaune", "noir", "blanc"],
  nationality: ["Tunisie", "France", "Algerienne", "Russie"],
};

const calcul = (max) => Math.abs(Math.floor(Math.random() * max));

// génération de profils humain...
const generateHumansProfiles = (data, nbrProfiles) => {
  const result = [];

  for (let i = 0; i < nbrProfiles; i++) {
    result.push({
      eyesColor: data.eyesColor[calcul(data.eyesColor.length - 1)],
      hairColor: data.hairColor[calcul(data.hairColor.length - 1)],
      body: data.body[calcul(data.body.length - 1)],
      skinColor: data.skinColor[calcul(data.skinColor.length - 1)],
      nationality: data.nationality[calcul(data.nationality.length - 1)],
    });
  }

  return result;
};

// effacement des doublons de profils
function removeCopies(arr) {
  const convertToString = arr.map((d) => JSON.stringify(d)); // je converti tous les object (les entrées qui sont des object ici, en string avec la méthode stringify du JSON.prototype)
  const removeClones = Array.from(new Set(convertToString));
  return removeClones.map((r) => JSON.parse(r));
}

const profilesGenerate = generateHumansProfiles(criteres, 50); // generation du tableau

const profiles = removeCopies(profilesGenerate);

export default profiles;

// console.log(profiles);

// console.log(profiles.length);

// console.log(removeCopies(profiles).length);

// array  -> [] -> map find filter some sort concat // Array.prototype
// object -> {} -> Object.keys Object.values // Object.prototype

// data[0].eyesColor

/* --------------------------------------------------------------------------------------------------- */
/* Consignes
Le code suivant est trop verbeux vous devez le simplifier */

/* result.push({
  eyesColor: data.eyesColor[calcul(data.eyesColor.length - 1)],
  hairColor: data.hairColor[calcul(data.hairColor.length - 1)],
  body: data.body[calcul(data.body.length - 1)],
  skinColor: data.skinColor[calcul(data.skinColor.length - 1)],
  nationality: data.nationality[calcul(data.nationality.length - 1)],
}); */

/* vous devez générer une grille de vos personnages sur une page web
qui contiendra une card de leurs critères */
