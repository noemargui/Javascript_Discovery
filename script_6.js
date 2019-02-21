const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// La liste des entrepreneurs du array nés dans les années 70

console.log("Les entrepreneurs nés dans les années 70 sont les suivants :");
for (let i = 0; i < entrepreneurs.length; i++) {
  if (entrepreneurs[i].year < 1980 && entrepreneurs[i].year >= 1970) {
    console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " : " + entrepreneurs[i].year); 
  }
}

// Une array qui combine le prénom et le nom des entrepreneurs

console.log("Les prénoms et noms des entrepreneurs combinés :");
let array_names = []
for (let i = 0; i < entrepreneurs.length; i++) {
  array_names.push(entrepreneurs[i].first + " " + entrepreneurs[i].last)
}
console.log(array_names)

// L'âge de chacun des entrepreneurs aujourd'hui

console.log("L'âge de chacun des entrepreneurs aujourd'hui est de :");
for (let i = 0; i < entrepreneurs.length; i++) {
  console.log(entrepreneurs[i].first + " " + entrepreneurs[i].last + " : " + (2019 - entrepreneurs[i].year) + " ans");
}


// Le tri des inventeurs par ordre alphabétique du nom de famille

console.log("Ci-dessous la liste des inventeurs triés par ordre alphabétique du nom de famille :");
let ListSort = entrepreneurs.slice()
function compare(a,b) {
  if (a.last < b.last)
    return -1;
  if (a.last > b.last)
    return 1;
  return 0;
}
ListSort.sort(compare)
console.log(ListSort)