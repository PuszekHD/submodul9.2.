var femaleNames = ['Dominika', 'Magda', 'Ola', 'Marta',];
var maleNames = ['Filip', 'Krzysiek', 'Mateusz', 'Ździchu'];

var mergeNames = femaleNames.concat(maleNames);

var additionalName = 'Mikołaj';

if (mergeNames.indexOf(additionalName) === -1) {
    var thisName = mergeNames.push(additionalName);   
}

console.log(mergeNames)


