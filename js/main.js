// Écrivez une boucle for qui affiche les nombres de 1 à 10 dans la console.

for (let num = 1; num <= 10; num++) {
    console.log(num);
  }
  

// Écrivez une boucle while qui affiche les nombres de 10 à 1 dans la console.

let U = 10;
while (U >= 1) {
  console.log(U);
  U--;
}


// Écrivez une boucle do...while qui affiche les nombres pairs de 2 à 20 dans la console.

let i = 2;
do {
  console.log(i);
  i += 2;
} while (i <= 20);



// Écrivez une boucle for...of qui affiche chaque élément d'un tableau de mots (par exemple, ["un", "deux", "trois"]).

let chiffres = ["un", "deux", "trois"];
for (let word of chiffres) {
  console.log(word);
}

// Écrivez une boucle for qui calcule la somme des nombres de 1 à 10 et affiche le résultat dans la console.

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Écrivez une boucle while qui demande à l'utilisateur de saisir un nombre jusqu'à ce qu'il saisisse un nombre positif.

let number;
while (number <= 0 || isNaN(number)) {
  number = Number(prompt("Saisissez un nombre positif :"));
}
console.log(number);

// Écrivez une boucle for qui affiche les nombres de 1 à 10 en utilisant l'instruction break pour sortir de la boucle lorsque le nombre atteint 5.

for (let cinq = 1; cinq <= 10; cinq++) {
    if (cinq ===5) {
      break;
    }
    console.log(cinq);
  }
  

// Écrivez une boucle for qui affiche les nombres de 1 à 10 en utilisant l'instruction continue pour passer à l'itération suivante lorsque le nombre est pair.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i);
  }
  