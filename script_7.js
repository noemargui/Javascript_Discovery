const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Les livre ont ils tous été empruntés au moins une fois ?

console.log("Chaque livre a t-il été emprunté ?");
for (let i = 0; i < books.length; i++) {
  if (books[i].rented > 0) {
    console.log(books[i].title + " : OUI");
  }
  else {
    console.log(books[i].title + " : NON");
  }
}

function BooksRented(book) {
  console.log("Les livres dans leur ensemble ont ils donc tous été empruntés au moins une fois ?");
  for (let i = 0; i < books.length; i++) {
    if (books[i].rented === 0) {
      return "NON, il y a au moins un livre qui n'a pas été emprunté.";
      break;
    }
  }
  return "OUI, tous ont été empruntés au moins une fois.";
}

console.log(BooksRented(books));


// Quel est le livre le plus emprunté / le moins emprunté ?

let RentingStatistic = [] 
  books.forEach( (book) => RentingStatistic.push(book.rented))
  console.log("Le livre le plus emprunté est :")
  console.log(books[books.findIndex(book => book.rented === Math.max(...RentingStatistic))])
  console.log("Le livre le mois emprunté est :")  
  console.log(books[books.findIndex(book => book.rented === Math.min(...RentingStatistic))])


// Trouver le livre avec l'ID 873495

function FindBookWithID(book) {
  for (let i = 0; i < books.length; i++) {
    if (book[i].id === 873495) {
      return book[i].title;
    }
  }
}

console.log("Le livre avant l'ID 873495 est le suivant :");
console.log(FindBookWithID(books));


// Supprimer le livre avec l'ID 133712

for (let i = 0; i < books.length; i++) {
  if (books[i].id === 133712) {
    console.log(`${books[i].title} porte l'ID 133712, et est donc supprimé.`)
    books.splice(i, 1);
  }
}


// Trier les livres par ordre alphabétique

let BooksAlphabetSorted = books.slice()
function compare(a,b) {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}
BooksAlphabetSorted.sort(compare)
console.log("Les livres triés par ordre alphabétique :")
console.log(BooksAlphabetSorted)